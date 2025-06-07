// GitHub Guide JavaScript

// Application data
const appData = {
  "gitConcepts": [
    {
      "term": "Repository (저장소)",
      "definition": "내 프로젝트 폴더",
      "description": "컴퓨터의 폴더처럼 파일들을 모아두는 공간입니다. 내 프로젝트의 모든 파일과 변경 기록이 들어있어요.",
      "analogy": "📁 집에 있는 서류철과 같아요. 중요한 문서들을 체계적으로 정리해서 보관하는 곳이죠."
    },
    {
      "term": "Commit (커밋)",
      "definition": "작업 내용 저장하기",
      "description": "현재 작업한 내용을 저장하는 것입니다. '지금 이 상태를 기억해!'라고 Git에게 말하는 거예요.",
      "analogy": "📸 게임에서 세이브 포인트 만들기와 같아요. 나중에 이 지점으로 돌아올 수 있어요."
    },
    {
      "term": "Push (푸시)",
      "definition": "내 컴퓨터 → GitHub로 업로드",
      "description": "내 컴퓨터에서 작업한 내용을 GitHub 서버에 올리는 것입니다.",
      "analogy": "📤 이메일 보내기와 같아요. 내 컴퓨터의 파일을 GitHub으로 전송하는 거예요."
    },
    {
      "term": "Pull (풀)",
      "definition": "GitHub → 내 컴퓨터로 다운로드",
      "description": "GitHub에 있는 최신 내용을 내 컴퓨터로 가져오는 것입니다.",
      "analogy": "📥 이메일 받기와 같아요. GitHub의 최신 버전을 내 컴퓨터로 가져오는 거예요."
    },
    {
      "term": "Branch (브랜치)",
      "definition": "독립적인 작업 공간",
      "description": "메인 프로젝트에 영향을 주지 않고 새로운 기능을 개발할 수 있는 별도의 작업 공간입니다.",
      "analogy": "🌳 나무의 가지와 같아요. 본줄기에서 뻗어나온 가지에서 따로 작업할 수 있어요."
    },
    {
      "term": "Merge (머지)",
      "definition": "브랜치 내용을 합치기",
      "description": "브랜치에서 작업한 내용을 메인 프로젝트에 합치는 것입니다.",
      "analogy": "🧩 퍼즐 맞추기와 같아요. 따로 만든 조각을 큰 그림에 끼워넣는 거예요."
    },
    {
      "term": "Pull Request (PR)",
      "definition": "검토 후 합쳐달라는 요청",
      "description": "내가 작업한 내용을 다른 사람이 검토한 후 메인 프로젝트에 합쳐달라고 요청하는 것입니다.",
      "analogy": "✋ 회사에서 보고서를 상사에게 검토받는 것과 같아요. '제가 작업한 내용인데, 확인 후 승인해주세요!'"
    }
  ],
  "webUISteps": [
    {
      "step": 1,
      "title": "새로운 Repository 만들기",
      "description": "GitHub에서 프로젝트를 시작하는 첫 번째 단계입니다.",
      "instructions": [
        "GitHub에 로그인한 후, 우측 상단의 '+' 버튼을 클릭하세요",
        "'New repository'를 선택하세요",
        "Repository 이름을 입력하세요 (예: my-first-project)",
        "Description(설명)을 선택적으로 작성하세요",
        "'Public' 또는 'Private'을 선택하세요",
        "'Create repository' 버튼을 클릭하세요"
      ]
    },
    {
      "step": 2,
      "title": "웹에서 파일 업로드하기",
      "description": "드래그앤드롭으로 쉽게 파일을 업로드할 수 있습니다.",
      "instructions": [
        "Repository 메인 페이지에서 'Add file' 버튼을 클릭하세요",
        "'Upload files'를 선택하세요",
        "파일을 드래그하거나 'choose your files'를 클릭하세요",
        "파일을 선택하고 업로드하세요",
        "Commit message에 변경 내용을 설명하세요",
        "'Commit changes' 버튼을 클릭하세요"
      ]
    },
    {
      "step": 3,
      "title": "웹에서 파일 수정하기",
      "description": "GitHub 웹 인터페이스에서 직접 파일을 편집할 수 있습니다.",
      "instructions": [
        "수정하고 싶은 파일을 클릭하세요",
        "연필 모양의 'Edit' 버튼을 클릭하세요",
        "내용을 수정하세요",
        "하단의 'Commit changes'에서 변경 내용을 설명하세요",
        "'Commit changes' 버튼을 클릭하세요"
      ]
    },
    {
      "step": 4,
      "title": "Branch 만들기",
      "description": "새로운 기능 개발을 위한 독립적인 작업 공간을 만듭니다.",
      "instructions": [
        "Repository 메인 페이지에서 'main' 브랜치 드롭다운을 클릭하세요",
        "새 브랜치 이름을 입력하세요 (예: feature-login)",
        "'Create branch: feature-login from main'을 클릭하세요",
        "새 브랜치에서 작업을 시작하세요"
      ]
    },
    {
      "step": 5,
      "title": "Pull Request 만들기",
      "description": "작업한 내용을 메인 브랜치에 합치기 위한 요청을 만듭니다.",
      "instructions": [
        "'Pull requests' 탭을 클릭하세요",
        "'New pull request' 버튼을 클릭하세요",
        "비교할 브랜치를 선택하세요",
        "제목과 설명을 작성하세요",
        "'Create pull request' 버튼을 클릭하세요"
      ]
    }
  ],
  "terminalCommands": [
    {
      "category": "기본 터미널 명령어",
      "commands": [
        {
          "command": "pwd",
          "description": "현재 위치한 폴더 경로를 보여줍니다",
          "example": "pwd",
          "output": "/Users/username/Documents"
        },
        {
          "command": "ls",
          "description": "현재 폴더의 파일과 폴더 목록을 보여줍니다",
          "example": "ls",
          "output": "README.md    src/    package.json"
        },
        {
          "command": "cd",
          "description": "다른 폴더로 이동합니다",
          "example": "cd my-project",
          "output": ""
        },
        {
          "command": "mkdir",
          "description": "새 폴더를 만듭니다",
          "example": "mkdir new-folder",
          "output": ""
        }
      ]
    },
    {
      "category": "Git 기초 명령어",
      "commands": [
        {
          "command": "git init",
          "description": "현재 폴더를 Git 저장소로 만듭니다",
          "example": "git init",
          "output": "Initialized empty Git repository in /path/to/project/.git/"
        },
        {
          "command": "git status",
          "description": "현재 파일들의 상태를 확인합니다",
          "example": "git status",
          "output": "On branch main\nUntracked files:\n  README.md"
        },
        {
          "command": "git add",
          "description": "파일을 스테이징 영역에 추가합니다",
          "example": "git add README.md",
          "output": ""
        },
        {
          "command": "git commit",
          "description": "변경사항을 저장합니다",
          "example": "git commit -m \"첫 번째 커밋\"",
          "output": "[main abc1234] 첫 번째 커밋"
        }
      ]
    },
    {
      "category": "GitHub 연결하기",
      "commands": [
        {
          "command": "git remote add origin",
          "description": "로컬 저장소를 GitHub 저장소와 연결합니다",
          "example": "git remote add origin https://github.com/username/repo.git",
          "output": ""
        },
        {
          "command": "git push",
          "description": "로컬 변경사항을 GitHub에 업로드합니다",
          "example": "git push -u origin main",
          "output": "Enumerating objects: 3, done."
        },
        {
          "command": "git clone",
          "description": "GitHub 저장소를 내 컴퓨터로 복사합니다",
          "example": "git clone https://github.com/username/repo.git",
          "output": "Cloning into 'repo'..."
        },
        {
          "command": "git pull",
          "description": "GitHub의 최신 변경사항을 가져옵니다",
          "example": "git pull",
          "output": "Already up to date."
        }
      ]
    }
  ]
};

// Application state
let currentSection = 'welcome';
let searchResults = [];
let progress = {
  concepts: 0,
  webui: 0,
  terminal: 0
};

// DOM Elements
const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section, .welcome-section');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const conceptsGrid = document.getElementById('conceptsGrid');
const webuiStepsContainer = document.getElementById('webuiStepsContainer');
const commandsContainer = document.getElementById('commandsContainer');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
  setupEventListeners();
  populateContent();
  updateSidebarVisibility();
});

function initializeApp() {
  // Show welcome section by default
  showSection('welcome');
  
  // Update progress bars
  updateProgressBars();
}

function setupEventListeners() {
  // Navigation buttons
  navButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const section = e.target.dataset.section;
      switchSection(section);
    });
  });

  // Search functionality
  searchInput.addEventListener('input', debounce(handleSearch, 300));
  searchBtn.addEventListener('click', handleSearch);
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  });

  // Sidebar navigation
  document.querySelectorAll('.sidebar__list a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        
        // Update progress when user navigates
        updateProgressFromNavigation(targetId);
      }
    });
  });

  // Setup tabs (Windows/Mac)
  document.querySelectorAll('.setup-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      const os = e.target.dataset.os;
      switchSetupTab(os);
    });
  });

  // Copy buttons (will be added dynamically)
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('copy-btn')) {
      copyToClipboard(e.target);
    }
  });

  // Track scroll for progress
  window.addEventListener('scroll', throttle(updateProgressFromScroll, 100));
}

function switchSection(sectionName) {
  // Update navigation
  navButtons.forEach(btn => {
    btn.classList.remove('nav-btn--active');
    if (btn.dataset.section === sectionName) {
      btn.classList.add('nav-btn--active');
    }
  });

  // Show selected section
  showSection(sectionName);
  
  // Update sidebar visibility
  updateSidebarVisibility();
  
  // Update current section
  currentSection = sectionName;

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showSection(sectionName) {
  sections.forEach(section => {
    section.classList.add('section--hidden');
  });

  const targetSection = document.getElementById(sectionName);
  if (targetSection) {
    targetSection.classList.remove('section--hidden');
  }
}

function updateSidebarVisibility() {
  const sidebarSections = document.querySelectorAll('.sidebar__section');
  sidebarSections.forEach(section => {
    const sectionType = section.dataset.section;
    if (sectionType === currentSection || currentSection === 'welcome') {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
}

function populateContent() {
  populateConcepts();
  populateWebUISteps();
  populateTerminalCommands();
}

function populateConcepts() {
  if (!conceptsGrid) return;

  conceptsGrid.innerHTML = appData.gitConcepts.map(concept => `
    <div class="concept-card">
      <h4>${concept.term}</h4>
      <div class="concept-definition">${concept.definition}</div>
      <div class="concept-description">${concept.description}</div>
      <div class="concept-analogy">${concept.analogy}</div>
    </div>
  `).join('');
}

function populateWebUISteps() {
  if (!webuiStepsContainer) return;

  webuiStepsContainer.innerHTML = appData.webUISteps.map(step => `
    <div class="step-card" id="step-${step.step}">
      <div class="step-header">
        <div class="step-number-badge">${step.step}</div>
        <h3 class="step-title">${step.title}</h3>
      </div>
      <p class="step-description">${step.description}</p>
      <ol class="step-instructions">
        ${step.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
      </ol>
    </div>
  `).join('');
}

function populateTerminalCommands() {
  if (!commandsContainer) return;

  commandsContainer.innerHTML = appData.terminalCommands.map(category => `
    <div class="commands-category" id="${category.category.replace(/\s+/g, '-').toLowerCase()}">
      <h3>${category.category}</h3>
      <div class="commands-grid">
        ${category.commands.map(cmd => `
          <div class="command-item">
            <div class="command-header">
              <div class="command-name">${cmd.command}</div>
            </div>
            <div class="command-description">${cmd.description}</div>
            <div class="code-block">
              <pre><code>${cmd.example}</code></pre>
              <button class="copy-btn" data-code="${cmd.example}">복사</button>
            </div>
            ${cmd.output ? `<div class="command-output">${cmd.output}</div>` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function handleSearch() {
  const query = searchInput.value.trim().toLowerCase();
  
  if (query === '') {
    clearSearchHighlights();
    return;
  }

  // Clear previous highlights
  clearSearchHighlights();

  // Search in all content
  const results = searchInContent(query);
  
  if (results.length > 0) {
    highlightSearchResults(query);
    // Show first result's section
    const firstResult = results[0];
    if (firstResult.section !== currentSection) {
      switchSection(firstResult.section);
    }
    
    // Scroll to first result
    setTimeout(() => {
      const firstElement = document.querySelector('.search-highlight');
      if (firstElement) {
        firstElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 300);
  } else {
    // Show no results message (could be implemented)
    console.log('검색 결과가 없습니다.');
  }
}

function searchInContent(query) {
  const results = [];
  
  // Search in concepts
  appData.gitConcepts.forEach(concept => {
    if (concept.term.toLowerCase().includes(query) ||
        concept.definition.toLowerCase().includes(query) ||
        concept.description.toLowerCase().includes(query)) {
      results.push({ section: 'concepts', type: 'concept', data: concept });
    }
  });

  // Search in web UI steps
  appData.webUISteps.forEach(step => {
    if (step.title.toLowerCase().includes(query) ||
        step.description.toLowerCase().includes(query) ||
        step.instructions.some(inst => inst.toLowerCase().includes(query))) {
      results.push({ section: 'webui', type: 'step', data: step });
    }
  });

  // Search in terminal commands
  appData.terminalCommands.forEach(category => {
    category.commands.forEach(cmd => {
      if (cmd.command.toLowerCase().includes(query) ||
          cmd.description.toLowerCase().includes(query) ||
          cmd.example.toLowerCase().includes(query)) {
        results.push({ section: 'terminal', type: 'command', data: cmd });
      }
    });
  });

  return results;
}

function highlightSearchResults(query) {
  const textNodes = getTextNodes(document.body);
  const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi');

  textNodes.forEach(node => {
    if (node.parentElement.closest('.copy-btn, .search-highlight')) return;
    
    const text = node.textContent;
    if (regex.test(text)) {
      const highlightedText = text.replace(regex, '<span class="search-highlight">$1</span>');
      const wrapper = document.createElement('span');
      wrapper.innerHTML = highlightedText;
      node.parentNode.replaceChild(wrapper, node);
    }
  });
}

function clearSearchHighlights() {
  const highlights = document.querySelectorAll('.search-highlight');
  highlights.forEach(highlight => {
    const parent = highlight.parentNode;
    parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
    parent.normalize();
  });
}

function getTextNodes(element) {
  const textNodes = [];
  const walker = document.createTreeWalker(
    element,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );

  let node;
  while (node = walker.nextNode()) {
    if (node.textContent.trim()) {
      textNodes.push(node);
    }
  }

  return textNodes;
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function switchSetupTab(os) {
  // Update tab buttons
  document.querySelectorAll('.setup-tab').forEach(tab => {
    tab.classList.remove('setup-tab--active');
    if (tab.dataset.os === os) {
      tab.classList.add('setup-tab--active');
    }
  });

  // Show selected panel
  document.querySelectorAll('.setup-panel').forEach(panel => {
    panel.classList.add('setup-panel--hidden');
  });
  
  const targetPanel = document.getElementById(`${os}-setup`);
  if (targetPanel) {
    targetPanel.classList.remove('setup-panel--hidden');
  }
}

function copyToClipboard(button) {
  const code = button.dataset.code || button.previousElementSibling.textContent;
  
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(code).then(() => {
      showCopySuccess(button);
    }).catch(() => {
      fallbackCopyToClipboard(code, button);
    });
  } else {
    fallbackCopyToClipboard(code, button);
  }
}

function fallbackCopyToClipboard(text, button) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    document.execCommand('copy');
    showCopySuccess(button);
  } catch (err) {
    console.error('복사 실패:', err);
  }
  
  document.body.removeChild(textArea);
}

function showCopySuccess(button) {
  const originalText = button.textContent;
  button.textContent = '복사됨!';
  button.classList.add('copied');
  
  setTimeout(() => {
    button.textContent = originalText;
    button.classList.remove('copied');
  }, 2000);
}

function updateProgressFromNavigation(targetId) {
  const sectionProgress = {
    'concepts': ['git-vs-github', 'core-concepts'],
    'webui': ['create-repo', 'upload-files', 'edit-files', 'create-branch', 'pull-request'],
    'terminal': ['basic-terminal', 'git-basics', 'github-connect']
  };

  Object.keys(sectionProgress).forEach(section => {
    const items = sectionProgress[section];
    const index = items.indexOf(targetId);
    if (index !== -1) {
      progress[section] = Math.max(progress[section], ((index + 1) / items.length) * 100);
      updateProgressBars();
    }
  });
}

function updateProgressFromScroll() {
  const scrollTop = window.pageYOffset;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  // Update progress based on current section and scroll position
  if (currentSection !== 'welcome') {
    progress[currentSection] = Math.max(progress[currentSection], Math.min(scrollPercent, 100));
    updateProgressBars();
  }
}

function updateProgressBars() {
  Object.keys(progress).forEach(section => {
    const progressBar = document.getElementById(`${section}Progress`);
    if (progressBar) {
      progressBar.style.width = `${progress[section]}%`;
    }
  });
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  // ESC to clear search
  if (e.key === 'Escape' && document.activeElement === searchInput) {
    searchInput.value = '';
    clearSearchHighlights();
    searchInput.blur();
  }
  
  // Ctrl/Cmd + K to focus search
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    searchInput.focus();
    searchInput.select();
  }
});

// Smooth scroll behavior for all internal links
document.addEventListener('click', (e) => {
  if (e.target.tagName === 'A' && e.target.getAttribute('href') && e.target.getAttribute('href').startsWith('#')) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
});

// Initialize intersection observer for progress tracking
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const elementId = entry.target.id;
      updateProgressFromNavigation(elementId);
    }
  });
}, observerOptions);

// Observe all trackable elements after content is loaded
setTimeout(() => {
  document.querySelectorAll('[id^="git-"], [id^="create-"], [id^="upload-"], [id^="edit-"], [id^="pull-"], [id^="basic-"], [id^="github-"]').forEach(el => {
    observer.observe(el);
  });
}, 1000);