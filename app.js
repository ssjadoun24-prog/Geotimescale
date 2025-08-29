// Geological Time Scale Data - Extended with all periods from the provided data
const geologicalData = {
  "QUATERNARY": {
    "name": "QUATERNARY",
    "type": "period", 
    "start": 2.58,
    "end": 0,
    "description": "Present to 2.58 Ma",
    "parent": null
  },
  "HOLOCENE": {
    "name": "HOLOCENE",
    "type": "epoch",
    "start": 0.012,
    "end": 0,
    "description": "Present to 0.012 Ma (12,000 years ago)",
    "parent": "QUATERNARY"
  },
  "MEGHALAYAN": {
    "name": "MEGHALAYAN",
    "type": "age",
    "start": 0.0042,
    "end": 0,
    "description": "Present to 4,200 years ago",
    "parent": "HOLOCENE"
  },
  "NORTHGRIPPIAN": {
    "name": "NORTHGRIPPIAN", 
    "type": "age",
    "start": 0.0082,
    "end": 0.0042,
    "description": "8,200 to 4,200 years ago",
    "parent": "HOLOCENE"
  },
  "GREENLANDIAN": {
    "name": "GREENLANDIAN",
    "type": "age", 
    "start": 0.0117,
    "end": 0.0082,
    "description": "11,700 to 8,200 years ago",
    "parent": "HOLOCENE"
  },
  "PLEISTOCENE": {
    "name": "PLEISTOCENE",
    "type": "epoch",
    "start": 2.58,
    "end": 0.012,
    "description": "2.58 Ma to 12,000 years ago",
    "parent": "QUATERNARY"
  },
  "LATE": {
    "name": "LATE",
    "type": "age",
    "start": 0.129,
    "end": 0.0117,
    "description": "129,000 to 11,700 years ago",
    "parent": "PLEISTOCENE"
  },
  "CHIBANIAN": {
    "name": "CHIBANIAN",
    "type": "age",
    "start": 0.774,
    "end": 0.129,
    "description": "774,000 to 129,000 years ago",
    "parent": "PLEISTOCENE"
  },
  "CALABRIAN": {
    "name": "CALABRIAN",
    "type": "age",
    "start": 1.8,
    "end": 0.774,
    "description": "1.8 million to 774,000 years ago",
    "parent": "PLEISTOCENE"
  },
  "GELASIAN": {
    "name": "GELASIAN",
    "type": "age", 
    "start": 2.58,
    "end": 1.8,
    "description": "2.58 to 1.8 million years ago",
    "parent": "PLEISTOCENE"
  },
  "NEOGENE": {
    "name": "NEOGENE",
    "type": "period",
    "start": 23.03,
    "end": 2.58,
    "description": "23.03 to 2.58 Ma",
    "parent": null
  },
  "PLIOCENE": {
    "name": "PLIOCENE",
    "type": "epoch",
    "start": 5.333,
    "end": 2.58,
    "description": "5.333 to 2.58 Ma",
    "parent": "NEOGENE"
  },
  "PIACENZIAN": {
    "name": "PIACENZIAN",
    "type": "age",
    "start": 3.600,
    "end": 2.58,
    "description": "3.6 to 2.58 Ma",
    "parent": "PLIOCENE"
  },
  "ZANCLEAN": {
    "name": "ZANCLEAN",
    "type": "age",
    "start": 5.333,
    "end": 3.600,
    "description": "5.333 to 3.6 Ma",
    "parent": "PLIOCENE"
  },
  "MIOCENE": {
    "name": "MIOCENE",
    "type": "epoch",
    "start": 23.03,
    "end": 5.333,
    "description": "23.03 to 5.333 Ma",
    "parent": "NEOGENE"
  },
  "MESSINIAN": {
    "name": "MESSINIAN",
    "type": "age",
    "start": 7.246,
    "end": 5.333,
    "description": "7.246 to 5.333 Ma",
    "parent": "MIOCENE"
  },
  "TORTONIAN": {
    "name": "TORTONIAN",
    "type": "age",
    "start": 11.63,
    "end": 7.246,
    "description": "11.63 to 7.246 Ma",
    "parent": "MIOCENE"
  },
  "SERRAVALLIAN": {
    "name": "SERRAVALLIAN",
    "type": "age",
    "start": 13.82,
    "end": 11.63,
    "description": "13.82 to 11.63 Ma",
    "parent": "MIOCENE"
  },
  "LANGHIAN": {
    "name": "LANGHIAN",
    "type": "age",
    "start": 15.97,
    "end": 13.82,
    "description": "15.97 to 13.82 Ma",
    "parent": "MIOCENE"
  },
  "BURDIGALIAN": {
    "name": "BURDIGALIAN",
    "type": "age",
    "start": 20.44,
    "end": 15.97,
    "description": "20.44 to 15.97 Ma",
    "parent": "MIOCENE"
  },
  "AQUITANIAN": {
    "name": "AQUITANIAN",
    "type": "age",
    "start": 23.03,
    "end": 20.44,
    "description": "23.03 to 20.44 Ma",
    "parent": "MIOCENE"
  },
  "PALEOGENE": {
    "name": "PALEOGENE",
    "type": "period",
    "start": 66.0,
    "end": 23.03,
    "description": "66.0 to 23.03 Ma",
    "parent": null
  },
  "OLIGOCENE": {
    "name": "OLIGOCENE",
    "type": "epoch",
    "start": 33.9,
    "end": 23.03,
    "description": "33.9 to 23.03 Ma",
    "parent": "PALEOGENE"
  },
  "CHATTIAN": {
    "name": "CHATTIAN",
    "type": "age",
    "start": 27.82,
    "end": 23.03,
    "description": "27.82 to 23.03 Ma",
    "parent": "OLIGOCENE"
  },
  "RUPELIAN": {
    "name": "RUPELIAN",
    "type": "age",
    "start": 33.9,
    "end": 27.82,
    "description": "33.9 to 27.82 Ma",
    "parent": "OLIGOCENE"
  },
  "EOCENE": {
    "name": "EOCENE",
    "type": "epoch",
    "start": 56.0,
    "end": 33.9,
    "description": "56.0 to 33.9 Ma",
    "parent": "PALEOGENE"
  },
  "PRIABONIAN": {
    "name": "PRIABONIAN",
    "type": "age",
    "start": 37.71,
    "end": 33.9,
    "description": "37.71 to 33.9 Ma",
    "parent": "EOCENE"
  },
  "BARTONIAN": {
    "name": "BARTONIAN",
    "type": "age",
    "start": 41.2,
    "end": 37.71,
    "description": "41.2 to 37.71 Ma",
    "parent": "EOCENE"
  },
  "LUTETIAN": {
    "name": "LUTETIAN",
    "type": "age",
    "start": 47.8,
    "end": 41.2,
    "description": "47.8 to 41.2 Ma",
    "parent": "EOCENE"
  },
  "YPRESIAN": {
    "name": "YPRESIAN",
    "type": "age",
    "start": 56.0,
    "end": 47.8,
    "description": "56.0 to 47.8 Ma",
    "parent": "EOCENE"
  },
  "PALEOCENE": {
    "name": "PALEOCENE",
    "type": "epoch",
    "start": 66.0,
    "end": 56.0,
    "description": "66.0 to 56.0 Ma",
    "parent": "PALEOGENE"
  },
  "THANETIAN": {
    "name": "THANETIAN",
    "type": "age",
    "start": 59.2,
    "end": 56.0,
    "description": "59.2 to 56.0 Ma",
    "parent": "PALEOCENE"
  },
  "SELANDIAN": {
    "name": "SELANDIAN",
    "type": "age",
    "start": 61.6,
    "end": 59.2,
    "description": "61.6 to 59.2 Ma",
    "parent": "PALEOCENE"
  },
  "DANIAN": {
    "name": "DANIAN",
    "type": "age",
    "start": 66.0,
    "end": 61.6,
    "description": "66.0 to 61.6 Ma",
    "parent": "PALEOCENE"
  },
  "CRETACEOUS": {
    "name": "CRETACEOUS",
    "type": "period",
    "start": 145.0,
    "end": 66.0,
    "description": "145.0 to 66.0 Ma",
    "parent": null
  },
  "JURASSIC": {
    "name": "JURASSIC",
    "type": "period",
    "start": 201.3,
    "end": 145.0,
    "description": "201.3 to 145.0 Ma",
    "parent": null
  },
  "TRIASSIC": {
    "name": "TRIASSIC",
    "type": "period",
    "start": 251.90,
    "end": 201.3,
    "description": "251.90 to 201.3 Ma",
    "parent": null
  },
  "PERMIAN": {
    "name": "PERMIAN",
    "type": "period",
    "start": 298.9,
    "end": 251.90,
    "description": "298.9 to 251.90 Ma",
    "parent": null
  },
  "CARBONIFEROUS": {
    "name": "CARBONIFEROUS",
    "type": "period",
    "start": 358.9,
    "end": 298.9,
    "description": "358.9 to 298.9 Ma",
    "parent": null
  },
  "DEVONIAN": {
    "name": "DEVONIAN",
    "type": "period",
    "start": 419.2,
    "end": 358.9,
    "description": "419.2 to 358.9 Ma",
    "parent": null
  },
  "SILURIAN": {
    "name": "SILURIAN",
    "type": "period",
    "start": 443.8,
    "end": 419.2,
    "description": "443.8 to 419.2 Ma",
    "parent": null
  },
  "ORDOVICIAN": {
    "name": "ORDOVICIAN",
    "type": "period",
    "start": 485.4,
    "end": 443.8,
    "description": "485.4 to 443.8 Ma",
    "parent": null
  },
  "CAMBRIAN": {
    "name": "CAMBRIAN",
    "type": "period",
    "start": 541.0,
    "end": 485.4,
    "description": "541.0 to 485.4 Ma",
    "parent": null
  },
  "CENOZOIC": {
    "name": "CENOZOIC",
    "type": "era",
    "start": 66.0,
    "end": 0,
    "description": "66.0 Ma to present (Age of Mammals)",
    "parent": "PHANEROZOIC"
  },
  "MESOZOIC": {
    "name": "MESOZOIC",
    "type": "era",
    "start": 251.90,
    "end": 66.0,
    "description": "251.90 to 66.0 Ma (Age of Reptiles)",
    "parent": "PHANEROZOIC"
  },
  "PALEOZOIC": {
    "name": "PALEOZOIC",
    "type": "era",
    "start": 541.0,
    "end": 251.90,
    "description": "541.0 to 251.90 Ma (Age of Ancient Life)",
    "parent": "PHANEROZOIC"
  },
  "PHANEROZOIC": {
    "name": "PHANEROZOIC",
    "type": "eon",
    "start": 541.0,
    "end": 0,
    "description": "541.0 Ma to present (Visible Life)",
    "parent": null
  },
  "PROTEROZOIC": {
    "name": "PROTEROZOIC",
    "type": "eon",
    "start": 2500,
    "end": 541.0,
    "description": "2500 to 541.0 Ma (Earlier Life)",
    "parent": null
  },
  "ARCHEAN": {
    "name": "ARCHEAN",
    "type": "eon",
    "start": 4000,
    "end": 2500,
    "description": "4000 to 2500 Ma (Ancient Life)",
    "parent": null
  },
  "HADEAN": {
    "name": "HADEAN",
    "type": "eon",
    "start": 4600,
    "end": 4000,
    "description": "~4600 to 4000 Ma (formation of Earth to oldest rocks)",
    "parent": null
  }
};

// Application State
let currentCategory = 'all';
let searchTimeout = null;

// Utility Functions
function formatTimeRange(start, end) {
  if (end === 0) {
    if (start < 0.01) {
      return `${Math.round(start * 1000000)} years ago to present`;
    } else if (start < 1) {
      return `${Math.round(start * 1000000)} years ago to present`;
    } else {
      return `${start} million years ago to present`;
    }
  } else {
    if (start < 0.01 && end < 0.01) {
      return `${Math.round(start * 1000000)} to ${Math.round(end * 1000000)} years ago`;
    } else if (start < 1 && end < 1) {
      return `${Math.round(start * 1000000)} to ${Math.round(end * 1000000)} years ago`;
    } else {
      return `${start} to ${end} million years ago`;
    }
  }
}

function getHierarchy(itemName) {
  const item = geologicalData[itemName];
  if (!item || !item.parent) return itemName;
  
  const hierarchy = [itemName];
  let parent = item.parent;
  
  while (parent && geologicalData[parent]) {
    hierarchy.unshift(parent);
    parent = geologicalData[parent].parent;
  }
  
  return hierarchy.join(' → ');
}

function searchData(query) {
  if (!query) return [];
  
  const lowercaseQuery = query.toLowerCase();
  const results = [];
  
  for (const [key, item] of Object.entries(geologicalData)) {
    if (item.name.toLowerCase().includes(lowercaseQuery)) {
      results.push({
        ...item,
        key: key,
        relevance: item.name.toLowerCase().indexOf(lowercaseQuery)
      });
    }
  }
  
  return results.sort((a, b) => a.relevance - b.relevance || a.start - b.start);
}

function filterByCategory(category) {
  if (category === 'all') return Object.values(geologicalData);
  return Object.values(geologicalData).filter(item => item.type === category);
}

// Search Functionality
function showSuggestions(results) {
  const suggestionsEl = document.getElementById('suggestions');
  
  if (results.length === 0) {
    suggestionsEl.classList.add('hidden');
    return;
  }
  
  const html = results.slice(0, 8).map(item => `
    <div class="suggestion-item" data-name="${item.name}">
      <div class="suggestion-name">${item.name}</div>
      <div class="suggestion-type">${item.type}</div>
    </div>
  `).join('');
  
  suggestionsEl.innerHTML = html;
  suggestionsEl.classList.remove('hidden');
  
  // Add click listeners to suggestions
  suggestionsEl.querySelectorAll('.suggestion-item').forEach(item => {
    item.addEventListener('click', () => {
      const name = item.dataset.name;
      document.getElementById('searchInput').value = name;
      suggestionsEl.classList.add('hidden');
      performSearch(name);
    });
  });
}

function performSearch(query) {
  const resultsSection = document.getElementById('resultsSection');
  const searchResults = document.getElementById('searchResults');
  
  if (!query.trim()) {
    resultsSection.classList.add('hidden');
    return;
  }
  
  const results = searchData(query.trim());
  displaySearchResults(results);
}

function displaySearchResults(results) {
  const resultsSection = document.getElementById('resultsSection');
  const searchResults = document.getElementById('searchResults');
  
  if (results.length === 0) {
    searchResults.innerHTML = `
      <div class="result-card">
        <h2>No results found</h2>
        <p>Try searching for geological periods, epochs, or ages like "Jurassic", "Cretaceous", or "Pleistocene".</p>
      </div>
    `;
  } else {
    const html = results.slice(0, 5).map(item => `
      <div class="result-card">
        <div class="result-header">
          <h2 class="result-name">${item.name}</h2>
          <span class="result-type">${item.type}</span>
        </div>
        <div class="result-time">${formatTimeRange(item.start, item.end)}</div>
        ${item.parent ? `
          <div class="result-hierarchy">
            <div class="hierarchy-label">Geological Hierarchy:</div>
            <div class="hierarchy-path">${getHierarchy(item.name)}</div>
          </div>
        ` : ''}
        <p>${item.description}</p>
      </div>
    `).join('');
    
    searchResults.innerHTML = html;
  }
  
  resultsSection.classList.remove('hidden');
  resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Category Functionality
function displayCategory(category) {
  const categoryGrid = document.getElementById('categoryGrid');
  const items = filterByCategory(category);
  const sortedItems = items.sort((a, b) => a.start - b.start);
  
  const html = sortedItems.map(item => `
    <div class="category-item" data-name="${item.name}">
      <div class="category-item-header">
        <div class="category-item-name">${item.name}</div>
        <span class="category-item-type">${item.type}</span>
      </div>
      <div class="category-item-time">${formatTimeRange(item.start, item.end)}</div>
    </div>
  `).join('');
  
  categoryGrid.innerHTML = html;
  
  // Add click listeners to category items
  categoryGrid.querySelectorAll('.category-item').forEach(item => {
    item.addEventListener('click', () => {
      const name = item.dataset.name;
      document.getElementById('searchInput').value = name;
      performSearch(name);
    });
  });
}

// Timeline Functionality
function createTimeline() {
  const track = document.getElementById('timelineTrack');
  if (!track) return;
  
  const majorPeriods = Object.values(geologicalData)
    .filter(item => item.type === 'period' || item.type === 'era')
    .sort((a, b) => b.start - a.start);
  
  const maxTime = Math.max(...majorPeriods.map(p => p.start));
  
  const html = majorPeriods.map(period => {
    const width = Math.max(((period.start - period.end) / maxTime) * 100, 2);
    const left = (period.end / maxTime) * 100;
    
    return `
      <div class="timeline-period" 
           style="left: ${left}%; width: ${width}%;" 
           data-name="${period.name}"
           title="${period.name}: ${formatTimeRange(period.start, period.end)}">
        ${period.name}
      </div>
    `;
  }).join('');
  
  track.innerHTML = html;
  
  // Add click listeners to timeline periods
  track.querySelectorAll('.timeline-period').forEach(period => {
    period.addEventListener('click', () => {
      const name = period.dataset.name;
      document.getElementById('searchInput').value = name;
      performSearch(name);
    });
  });
}

// Compare Functionality
function setupCompareSelects() {
  const compareSelect1 = document.getElementById('compareSelect1');
  const compareSelect2 = document.getElementById('compareSelect2');
  
  const options = Object.entries(geologicalData)
    .sort(([,a], [,b]) => a.name.localeCompare(b.name))
    .map(([key, item]) => `<option value="${key}">${item.name} (${item.type})</option>`)
    .join('');
  
  compareSelect1.innerHTML = '<option value="">Select a period...</option>' + options;
  compareSelect2.innerHTML = '<option value="">Select a period...</option>' + options;
}

function compareItems() {
  const compareSelect1 = document.getElementById('compareSelect1');
  const compareSelect2 = document.getElementById('compareSelect2');
  const compareResults = document.getElementById('compareResults');
  
  const item1Key = compareSelect1.value;
  const item2Key = compareSelect2.value;
  
  if (!item1Key || !item2Key) {
    compareResults.innerHTML = '';
    return;
  }
  
  const item1 = geologicalData[item1Key];
  const item2 = geologicalData[item2Key];
  
  const duration1 = item1.start - item1.end;
  const duration2 = item2.start - item2.end;
  const timeDiff = Math.abs(item1.start - item2.start);
  
  const html = `
    <div class="compare-item">
      <h3>${item1.name}</h3>
      <p><strong>Type:</strong> ${item1.type}</p>
      <p><strong>Duration:</strong> ${formatTimeRange(item1.start, item1.end)}</p>
      <p><strong>Length:</strong> ${duration1} million years</p>
    </div>
    <div class="compare-item">
      <h3>${item2.name}</h3>
      <p><strong>Type:</strong> ${item2.type}</p>
      <p><strong>Duration:</strong> ${formatTimeRange(item2.start, item2.end)}</p>
      <p><strong>Length:</strong> ${duration2} million years</p>
    </div>
    <div class="compare-item" style="grid-column: 1 / -1;">
      <h3>Comparison</h3>
      <p><strong>Time difference:</strong> ${timeDiff} million years apart</p>
      <p><strong>Duration comparison:</strong> ${item1.name} was ${duration1 > duration2 ? 'longer' : duration1 < duration2 ? 'shorter' : 'the same duration'} as ${item2.name}</p>
      ${item1.start > item2.start ? `<p>${item1.name} occurred ${timeDiff} million years after ${item2.name}</p>` : `<p>${item1.name} occurred ${timeDiff} million years before ${item2.name}</p>`}
    </div>
  `;
  
  compareResults.innerHTML = html;
}

// Random Fact Functionality
function showRandomFact() {
  const items = Object.values(geologicalData);
  const randomItem = items[Math.floor(Math.random() * items.length)];
  
  const searchInput = document.getElementById('searchInput');
  searchInput.value = randomItem.name;
  performSearch(randomItem.name);
}

// Initialize Application
function initializeApp() {
  // Get DOM elements
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const suggestions = document.getElementById('suggestions');
  const tabBtns = document.querySelectorAll('.tab-btn');
  const randomFactBtn = document.getElementById('randomFactBtn');
  const timelineBtn = document.getElementById('timelineBtn');
  const compareBtn = document.getElementById('compareBtn');
  const timelineSection = document.getElementById('timelineSection');
  const compareSection = document.getElementById('compareSection');
  const compareSelect1 = document.getElementById('compareSelect1');
  const compareSelect2 = document.getElementById('compareSelect2');

  // Search input event listeners
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value;
      
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        if (query.length > 1) {
          const results = searchData(query);
          showSuggestions(results);
        } else {
          suggestions.classList.add('hidden');
        }
      }, 300);
    });

    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        suggestions.classList.add('hidden');
        performSearch(searchInput.value);
      }
    });
  }

  // Search button
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      suggestions.classList.add('hidden');
      performSearch(searchInput.value);
    });
  }

  // Hide suggestions when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
      suggestions.classList.add('hidden');
    }
  });

  // Category tabs
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      currentCategory = btn.dataset.category;
      displayCategory(currentCategory);
    });
  });

  // Random fact button
  if (randomFactBtn) {
    randomFactBtn.addEventListener('click', showRandomFact);
  }

  // Timeline button
  if (timelineBtn) {
    timelineBtn.addEventListener('click', () => {
      if (timelineSection.classList.contains('hidden')) {
        timelineSection.classList.remove('hidden');
        createTimeline();
        timelineSection.scrollIntoView({ behavior: 'smooth' });
        timelineBtn.textContent = '❌ Hide Timeline';
      } else {
        timelineSection.classList.add('hidden');
        timelineBtn.textContent = '📊 Timeline View';
      }
    });
  }

  // Compare button
  if (compareBtn) {
    compareBtn.addEventListener('click', () => {
      if (compareSection.classList.contains('hidden')) {
        compareSection.classList.remove('hidden');
        setupCompareSelects();
        compareSection.scrollIntoView({ behavior: 'smooth' });
        compareBtn.textContent = '❌ Hide Compare';
      } else {
        compareSection.classList.add('hidden');
        compareBtn.textContent = '⚖️ Compare Periods';
      }
    });
  }

  // Compare selects
  if (compareSelect1) {
    compareSelect1.addEventListener('change', compareItems);
  }
  if (compareSelect2) {
    compareSelect2.addEventListener('change', compareItems);
  }

  // Initialize with all categories
  displayCategory('all');
  
  // Focus search input
  if (searchInput) {
    searchInput.focus();
  }
}

// Wait for DOM to load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}