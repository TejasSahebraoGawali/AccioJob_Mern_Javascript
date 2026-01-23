const addBtn = document.getElementById('add-btn');
const input = document.getElementById('addtask');
const titleInput = document.getElementById('addtitle');
const dueInput = document.getElementById('adddue');
const listSection = document.getElementById('listSection');
const navItems = document.querySelectorAll('.nav-item');

const STORAGE_KEY = 'notin_todos_v1';
let currentSection = 'all';

// data model: array of {id, text, completed, section}

function formatDateTime(iso) {
	if (!iso) return '';
	try {
		const d = new Date(iso);
		return d.toLocaleString();
	} catch (e) { return iso }
}


function createTaskCard(task) {
	const card = document.createElement('div');
	card.className = 'task-card' + (task.completed ? ' completed' : '');
	card.dataset.id = task.id;

	const left = document.createElement('div'); left.className = 'task-left';
	const tick = document.createElement('button'); tick.className = 'tick';
	tick.innerHTML = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
	const wrapper = document.createElement('div'); wrapper.style.flex = '1';
	const titleEl = document.createElement('div'); titleEl.className = 'task-title'; titleEl.textContent = task.title || '';
	const txt = document.createElement('div'); txt.className = 'task-text'; txt.textContent = task.text || ''; txt.title = 'Double-click to edit'; txt.tabIndex = 0;
	const meta = document.createElement('div'); meta.className = 'task-meta';
	const dueEl = document.createElement('span'); dueEl.className = 'task-due'; dueEl.textContent = task.due ? `Due: ${formatDateTime(task.due)}` : '';
	const createdEl = document.createElement('span'); createdEl.className = 'task-created'; createdEl.textContent = task.createdAt ? `Created: ${formatDateTime(task.createdAt)}` : '';
	meta.appendChild(dueEl); meta.appendChild(createdEl);
	wrapper.appendChild(titleEl); wrapper.appendChild(txt); wrapper.appendChild(meta);

	left.appendChild(tick); left.appendChild(wrapper);

	const actions = document.createElement('div'); actions.className = 'task-actions';
	const editBtn = document.createElement('button'); editBtn.className = 'action-btn edit-btn'; editBtn.textContent = 'Edit';
	const del = document.createElement('button'); del.className = 'delete-btn'; del.textContent = 'Delete';
	actions.appendChild(editBtn); actions.appendChild(del);

	card.appendChild(left); card.appendChild(actions);

	// tick handler
	tick.addEventListener('click', () => {
		task.completed = !task.completed;
		saveTaskList();
		render();
	});

	// delete
	del.addEventListener('click', () => {
		tasks = tasks.filter(t => t.id !== task.id);
		saveTaskList(); render();
	});

	// edit button opens inline editor for title, text, and due
	editBtn.addEventListener('click', () => {
		if (card.dataset.editing === '1') return; // already editing
		card.dataset.editing = '1';
		// create inputs
		const titleIn = document.createElement('input'); titleIn.value = task.title || ''; titleIn.style.width = '100%'; titleIn.style.marginBottom = '6px';
		const textIn = document.createElement('textarea'); textIn.value = task.text || ''; textIn.rows = 3; textIn.style.width = '100%';
		const dueIn = document.createElement('input'); dueIn.type = 'datetime-local'; dueIn.value = task.due ? task.due.substring(0, 16) : '';

		// replace display nodes
		wrapper.replaceChild(titleIn, titleEl);
		wrapper.replaceChild(textIn, txt);
		wrapper.replaceChild(dueIn, meta);

		// change buttons
		editBtn.textContent = 'Save';
		const cancelBtn = document.createElement('button'); cancelBtn.className = 'action-btn'; cancelBtn.textContent = 'Cancel';
		actions.insertBefore(cancelBtn, del);

		// save handler
		const finish = () => {
			task.title = titleIn.value.trim();
			task.text = textIn.value.trim();
			task.due = dueIn.value ? new Date(dueIn.value).toISOString() : null;
			card.dataset.editing = '0';
			actions.removeChild(cancelBtn);
			editBtn.textContent = 'Edit';
			saveTaskList(); render();
		};
		cancelBtn.addEventListener('click', () => { card.dataset.editing = '0'; actions.removeChild(cancelBtn); editBtn.textContent = 'Edit'; render(); });
		editBtn.addEventListener('click', finish, { once: true });
	});

	// edit (double-click) still edits text only
	txt.addEventListener('dblclick', () => {
		txt.contentEditable = true; txt.focus(); document.getSelection().selectAllChildren(txt);
	});
	txt.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); txt.blur(); } });
	txt.addEventListener('blur', () => { if (txt.isContentEditable) { txt.contentEditable = false; task.text = txt.textContent.trim(); saveTaskList(); render(); } });

	return card;
}

function addTask() {
	const val = input.value.trim();
	const titleVal = titleInput.value.trim();
	const dueVal = dueInput.value ? new Date(dueInput.value).toISOString() : null;
	if (!val && !titleVal) return;
	const task = { id: Date.now().toString(), title: titleVal || '(No title)', text: val, completed: false, section: 'all', due: dueVal, createdAt: new Date().toISOString() };
	tasks.unshift(task);
	input.value = ''; titleInput.value = ''; dueInput.value = ''; resizeComposer(); input.focus(); saveTaskList(); render();
}

addBtn.addEventListener('click', addTask);
input.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); addTask(); } });

// auto-resize composer textarea so long tasks remain visible
function resizeComposer() {
	if (!input) return;
	input.style.height = 'auto';
	const max = 240; const h = Math.min(input.scrollHeight, max);
	input.style.height = (h) + 'px';
}
input.addEventListener('input', resizeComposer);
// set initial size
resizeComposer();

navItems.forEach(n => n.addEventListener('click', () => { navItems.forEach(x => x.classList.remove('active')); n.classList.add('active'); currentSection = n.dataset.section; render(); }));

function filterTasksForSection(section) {
	if (section === 'all') return tasks;
	if (section === 'today') return tasks.filter(t => t.section === 'today');
	if (section === 'planned') return tasks.filter(t => t.section === 'planned');
	if (section === 'completed') return tasks.filter(t => t.completed);
	return tasks;
}

function updateEmptyState() {
	const has = tasks.length > 0; // simple
	// optional: show a subtle hint
}

function updateCounts() {
	const total = tasks.length;
	const completed = tasks.filter(t => t.completed).length;
	const pending = total - completed;
	document.getElementById('countAll').textContent = `All (${total})`;
	document.getElementById('countPending').textContent = `Pending (${pending})`;
	document.getElementById('countCompleted').textContent = `Completed (${completed})`;
}

function saveTaskList() { localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks)); }

let tasks = [];
function loadTaskList() { try { const raw = localStorage.getItem(STORAGE_KEY); if (!raw) return; tasks = JSON.parse(raw); } catch (e) { console.error(e); } }

function render() {
	listSection.innerHTML = '';
	const visible = filterTasksForSection(currentSection);
	visible.forEach(t => listSection.appendChild(createTaskCard(t)));
	updateCounts();
}

// Initialize
loadTaskList(); render();
input.focus();
window.addEventListener('beforeunload', saveTaskList);

