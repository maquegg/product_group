// 模拟商品数据
const mockGoods = [
    {
        id: '1',
        name: 'iPhone 14 Pro 深空黑色',
        skuCode: 'IP14PRO-128-BLACK',
        price: 7999,
        imageUrl: 'https://img.alicdn.com/imgextra/i4/O1CN01XPbw9Y24BJjjOCPTN_!!6000000007352-0-tps-1080-1080.jpg',
        specs: ['128GB', '深空黑色'],
    },
    {
        id: '2',
        name: 'iPhone 14 Pro 银色',
        skuCode: 'IP14PRO-128-SILVER',
        price: 7999,
        imageUrl: 'https://img.alicdn.com/imgextra/i4/O1CN01w5HvNH1jmf351258N_!!6000000004582-0-tps-1500-1500.jpg',
        specs: ['128GB', '银色'],
    },
    {
        id: '3',
        name: 'iPhone 14 Pro 金色',
        skuCode: 'IP14PRO-128-GOLD',
        price: 7999,
        imageUrl: 'https://img.alicdn.com/imgextra/i1/O1CN01KOJygr1ROzppQDMz5_!!6000000002108-0-tps-1500-1500.jpg',
        specs: ['128GB', '金色'],
    },
    {
        id: '4',
        name: 'iPhone 14 Pro 深紫色',
        skuCode: 'IP14PRO-128-PURPLE',
        price: 7999,
        imageUrl: 'https://img.alicdn.com/imgextra/i1/O1CN01TfPuYN24FmYKMdGNo_!!6000000007360-0-tps-1500-1500.jpg',
        specs: ['128GB', '深紫色'],
    },
    {
        id: '5',
        name: 'iPhone 14 Pro 深空黑色',
        skuCode: 'IP14PRO-256-BLACK',
        price: 8999,
        imageUrl: 'https://img.alicdn.com/imgextra/i4/O1CN01XPbw9Y24BJjjOCPTN_!!6000000007352-0-tps-1080-1080.jpg',
        specs: ['256GB', '深空黑色'],
    },
    {
        id: '6',
        name: 'iPhone 14 Pro 银色',
        skuCode: 'IP14PRO-256-SILVER',
        price: 8999,
        imageUrl: 'https://img.alicdn.com/imgextra/i4/O1CN01w5HvNH1jmf351258N_!!6000000004582-0-tps-1500-1500.jpg',
        specs: ['256GB', '银色'],
    },
    {
        id: '7',
        name: 'iPhone 14 Pro 金色',
        skuCode: 'IP14PRO-256-GOLD',
        price: 8999,
        imageUrl: 'https://img.alicdn.com/imgextra/i1/O1CN01KOJygr1ROzppQDMz5_!!6000000002108-0-tps-1500-1500.jpg',
        specs: ['256GB', '金色'],
    },
    {
        id: '8',
        name: 'iPhone 14 Pro 深紫色',
        skuCode: 'IP14PRO-256-PURPLE',
        price: 8999,
        imageUrl: 'https://img.alicdn.com/imgextra/i1/O1CN01TfPuYN24FmYKMdGNo_!!6000000007360-0-tps-1500-1500.jpg',
        specs: ['256GB', '深紫色'],
    },
    {
        id: '9',
        name: '蜜桃味奶茶 常温',
        skuCode: 'MT-TEA-NORMAL',
        price: 15,
        imageUrl: 'https://img.alicdn.com/imgextra/i3/O1CN01vDxSfa1wQSnaYb0xt_!!6000000006310-0-tps-800-800.jpg',
        specs: ['蜜桃味', '常温'],
    },
    {
        id: '10',
        name: '蜜桃味奶茶 冷藏',
        skuCode: 'MT-TEA-COLD',
        price: 18,
        imageUrl: 'https://img.alicdn.com/imgextra/i3/O1CN01vDxSfa1wQSnaYb0xt_!!6000000006310-0-tps-800-800.jpg',
        specs: ['蜜桃味', '冷藏'],
    },
    {
        id: '11',
        name: '苹果味奶茶 常温',
        skuCode: 'AP-TEA-NORMAL',
        price: 15,
        imageUrl: 'https://img.alicdn.com/imgextra/i2/O1CN01YqmkWA1OhKHFfQjYr_!!6000000001741-0-tps-800-800.jpg',
        specs: ['苹果味', '常温'],
    },
    {
        id: '12',
        name: '苹果味奶茶 冷藏',
        skuCode: 'AP-TEA-COLD',
        price: 18,
        imageUrl: 'https://img.alicdn.com/imgextra/i2/O1CN01YqmkWA1OhKHFfQjYr_!!6000000001741-0-tps-800-800.jpg',
        specs: ['苹果味', '冷藏'],
    },
];

// 预制规格项选项
const presetSpecItems = [
    "商品名称",
    "商品规格",
    "品牌",
    "口味",
    "系列",
    "香型",
    "尺寸",
    "尺码",
    "品种",
    "款式",
    "颜色",
    "型号",
    "储存方式",
    "加工方式"
];

// 模拟分类数据
const mockCategories = [
    {
        id: 'all',
        name: '全部分组',
        icon: '📦',
        isParent: false,
        parentId: null
    },
    {
        id: 'food',
        name: '食品类',
        icon: '🍽️',
        isParent: true, 
        parentId: null,
        expanded: true
    },
    {
        id: 'fruit',
        name: '水果类',
        icon: '🍎',
        isParent: false,
        parentId: 'food'
    },
    {
        id: 'vegetable',
        name: '蔬菜类',
        icon: '🥦',
        isParent: false,
        parentId: 'food'
    },
    {
        id: 'drink',
        name: '饮料类',
        icon: '🥤',
        isParent: false,
        parentId: 'food'
    },
    {
        id: 'electronics',
        name: '电子产品',
        icon: '💻',
        isParent: true,
        parentId: null, 
        expanded: true
    },
    {
        id: 'digital',
        name: '数码类',
        icon: '📱',
        isParent: false,
        parentId: 'electronics'
    },
    {
        id: 'appliance',
        name: '家电类',
        icon: '🔌',
        isParent: false,
        parentId: 'electronics'
    }
];

// 模拟商品分组数据
const mockGoodsGroups = [
    {
        id: '1',
        name: 'iPhone 14 Pro 128GB',
        description: 'iPhone 14 Pro 128GB 全色系商品分组',
        categoryId: 'digital',
        createdAt: '2023-01-15 10:30:00',
        updatedAt: '2023-01-15 10:30:00',
        goodsList: mockGoods.slice(0, 4),
        specItems: [
            {
                name: '存储容量',
                values: ['128GB']
            },
            {
                name: '颜色',
                values: ['深空黑色', '银色', '金色', '深紫色']
            }
        ]
    },
    {
        id: '2',
        name: 'iPhone 14 Pro 256GB',
        description: 'iPhone 14 Pro 256GB 全色系商品分组',
        categoryId: 'digital',
        createdAt: '2023-01-15 11:20:00',
        updatedAt: '2023-01-16 09:15:00',
        goodsList: mockGoods.slice(4, 8),
        specItems: [
            {
                name: '存储容量',
                values: ['256GB']
            },
            {
                name: '颜色',
                values: ['深空黑色', '银色', '金色', '深紫色']
            }
        ]
    },
    {
        id: '3',
        name: '奶茶多口味系列',
        description: '奶茶多口味多温度系列商品分组',
        categoryId: 'fruit',
        createdAt: '2023-01-20 14:30:00',
        updatedAt: '2023-01-20 14:30:00',
        goodsList: mockGoods.slice(8, 12),
        specItems: [
            {
                name: '口味',
                values: ['蜜桃味', '苹果味']
            },
            {
                name: '温度',
                values: ['常温', '冷藏']
            }
        ]
    },
];

// DOM元素
const createModal = document.getElementById('createModal');
const goodsSelector = document.getElementById('goodsSelector');
const specItemModal = document.getElementById('specItemModal');
const overlay = document.getElementById('overlay');
const closeModal = document.getElementById('closeModal');
const closeGoodsSelector = document.getElementById('closeGoodsSelector');
const closeSpecItemModal = document.getElementById('closeSpecItemModal');
const cancelBtn = document.getElementById('cancelBtn');
const submitBtn = document.getElementById('submitBtn');
const cancelSelectBtn = document.getElementById('cancelSelectBtn');
const confirmSelectBtn = document.getElementById('confirmSelectBtn');
const cancelSpecBtn = document.getElementById('cancelSpecBtn');
const confirmSpecBtn = document.getElementById('confirmSpecBtn');
const addSpecBtn = document.getElementById('addSpecBtn');
const addValueBtn = document.getElementById('addValueBtn');
const expandGoodsBtn = document.getElementById('expandGoodsBtn');
const createBtn = document.getElementById('createBtn');
const searchBtn = document.getElementById('searchBtn');
const resetBtn = document.getElementById('resetBtn');
const searchGoodsBtn = document.getElementById('searchGoodsBtn');
const selectAll = document.getElementById('selectAll');
const goodsTable = document.getElementById('goodsTable');
const selectedGoodsTable = document.getElementById('selectedGoodsTable');
const groupsTable = document.getElementById('groupsTable');
const selectedCountElement = document.getElementById('selectedCount');
const modalTitle = document.getElementById('modalTitle');
const specItemsContainer = document.getElementById('specItems');
const matrixTable = document.getElementById('matrixTable');

// 全局变量
let selectedGoods = [];
let selectedGoodsInSelector = [];
let currentGroupId = null;
let isEditing = false;
let filteredGoods = [...mockGoods];
let specItems = []; // 规格项数组
let currentGoodsMap = {}; // 规格组合与商品的映射
let currentEditingSpecIndex = -1;
let currentCategoryId = 'all'; // 当前选中的分类ID

// 初始化页面
function init() {
    renderCategorySidebar();
    renderGroupsTable();
    bindEvents();
}

// 绑定事件
function bindEvents() {
    // 创建分组按钮点击事件
    createBtn.addEventListener('click', function() {
        openCreateModal();
    });

    // 关闭模态框
    const closeModalBtn = document.getElementById('closeModal');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            closeCreateModal();
        });
    }

    // 取消按钮点击事件
    cancelBtn.addEventListener('click', function() {
        closeCreateModal();
    });

    // 提交按钮点击事件
    submitBtn.addEventListener('click', function() {
        submitGroupForm();
    });

    // 添加规格项按钮点击事件
    addSpecBtn.addEventListener('click', function() {
        openSpecItemModal();
    });

    // 添加规格值按钮点击事件
    addValueBtn.addEventListener('click', function() {
        addSpecValue();
    });

    // 关闭商品选择器
    closeGoodsSelector.addEventListener('click', function() {
        closeGoodsSelectorModal();
    });

    // 关闭规格项模态框
    closeSpecItemModal.addEventListener('click', function() {
        closeSpecItemModalDialog();
    });

    // 取消选择按钮点击事件
    cancelSelectBtn.addEventListener('click', function() {
        closeGoodsSelectorModal();
    });

    // 取消添加规格项
    cancelSpecBtn.addEventListener('click', function() {
        closeSpecItemModalDialog();
    });

    // 确认选择按钮点击事件
    confirmSelectBtn.addEventListener('click', function() {
        confirmSelectGoods();
    });

    // 确认添加规格项
    confirmSpecBtn.addEventListener('click', function() {
        confirmAddSpecItem();
    });

    // 全选/取消全选
    selectAll.addEventListener('change', function() {
        toggleSelectAll(this.checked);
    });

    // 搜索按钮点击事件
    searchBtn.addEventListener('click', function() {
        searchGroups();
    });

    // 重置按钮点击事件
    resetBtn.addEventListener('click', function() {
        resetSearch();
    });

    // 初始化展开/折叠已关联商品
    initExpandGoods();
}

// 初始化分类事件
function initCategoryEvents() {
    // 分类点击事件
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        if (!item.classList.contains('add-category')) {
            const categoryId = item.getAttribute('data-id');
            const isParent = item.classList.contains('parent-category');
            
            // 先移除旧的事件监听器（如果有的话）
            item.removeEventListener('click', categoryClickHandler);
            
            // 绑定新的事件监听器
            item.addEventListener('click', categoryClickHandler);
            
            // 保存当前项的类型和ID以便在事件处理器中使用
            item.setAttribute('data-is-parent', isParent ? 'true' : 'false');
        }
    });

    // 添加分类按钮点击事件 - 确保只绑定一次
    const addCategoryBtn = document.getElementById('addCategoryBtn');
    if (addCategoryBtn) {
        // 先移除旧的事件监听器
        addCategoryBtn.removeEventListener('click', openAddCategoryDialog);
        // 绑定新的事件监听器
        addCategoryBtn.addEventListener('click', openAddCategoryDialog);
    }

    // 配置分类按钮点击事件
    const configBtn = document.getElementById('configCategories');
    if (configBtn) {
        // 先移除旧的事件监听器
        configBtn.removeEventListener('click', configCategoryClickHandler);
        // 绑定新的事件监听器
        configBtn.addEventListener('click', configCategoryClickHandler);
    }
}

// 分类点击事件处理器
function categoryClickHandler(e) {
    const categoryId = this.getAttribute('data-id');
    const isParent = this.getAttribute('data-is-parent') === 'true';
    
    if (isParent) {
        const expandIcon = this.querySelector('.expand-icon');
        if (expandIcon && e.target === expandIcon) {
            // 点击展开图标时，只切换展开状态，不选中分类
            toggleCategoryExpand(categoryId);
            e.stopPropagation();
        } else {
            // 点击父分类其他部分，只选中分类，不改变展开状态
            switchCategory(categoryId);
        }
    } else {
        // 子分类直接选中
        switchCategory(categoryId);
    }
}

// 配置按钮点击事件处理器
function configCategoryClickHandler(e) {
    e.stopPropagation();
    openConfigCategoryDialog();
}

// 切换分类展开/折叠状态
function toggleCategoryExpand(categoryId) {
    // 找到对应的分类对象
    const category = mockCategories.find(cat => cat.id === categoryId);
    if (category && category.isParent) {
        // 切换展开状态
        category.expanded = !category.expanded;
        
        // 找到对应的子分类容器
        const categoryItem = document.querySelector(`.category-item[data-id="${categoryId}"]`);
        const expandIcon = categoryItem.querySelector('.expand-icon');
        if (expandIcon) {
            expandIcon.textContent = category.expanded ? '▼' : '▶';
        }
        
        // 更新子分类容器的显示状态
        const subcategoryContainer = categoryItem.nextElementSibling;
        if (subcategoryContainer && subcategoryContainer.classList.contains('subcategory-container')) {
            subcategoryContainer.style.display = category.expanded ? 'block' : 'none';
        }
    }
}

// 切换分类
function switchCategory(categoryId) {
    currentCategoryId = categoryId;
    
    // 更新分类选中状态
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        if (item.getAttribute('data-id') === categoryId) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    // 更新商品分组表格
    renderGroupsTable();
}

// 渲染左侧分类导航
function renderCategorySidebar() {
    const categoryList = document.querySelector('.category-list');
    categoryList.innerHTML = '';

    // 计算每个分类下的商品分组数量
    const categoryCounts = {};
    
    // 计算每个父分类的子分类数量总和
    mockCategories.forEach(category => {
        if (category.id === 'all') {
            categoryCounts[category.id] = mockGoodsGroups.length;
        } else {
            if (!category.isParent) {
                // 子分类直接计算包含的分组数
                categoryCounts[category.id] = mockGoodsGroups.filter(group => group.categoryId === category.id).length;
            } else {
                // 父分类需要计算所有子分类的总和
                const childCategories = mockCategories.filter(cat => cat.parentId === category.id);
                const childCategoryIds = childCategories.map(cat => cat.id);
                categoryCounts[category.id] = mockGoodsGroups.filter(group => 
                    childCategoryIds.includes(group.categoryId)
                ).length;
            }
        }
    });

    // 首先添加"全部分组"
    const allCategory = mockCategories.find(cat => cat.id === 'all');
    if (allCategory) {
        const categoryItem = createCategoryItem(allCategory, categoryCounts[allCategory.id] || 0);
        categoryList.appendChild(categoryItem);
    }
    
    // 添加所有一级分类及其子分类
    const parentCategories = mockCategories.filter(cat => cat.isParent && cat.parentId === null);
    
    parentCategories.forEach(parentCat => {
        // 创建父分类项
        const parentItem = createCategoryItem(parentCat, categoryCounts[parentCat.id] || 0, true);
        categoryList.appendChild(parentItem);
        
        // 查找并添加所有子分类
        const childCategories = mockCategories.filter(cat => cat.parentId === parentCat.id);
        
        const childrenContainer = document.createElement('div');
        childrenContainer.className = 'subcategory-container';
        childrenContainer.style.display = parentCat.expanded ? 'block' : 'none';
        
        childCategories.forEach(childCat => {
            const childItem = createCategoryItem(childCat, categoryCounts[childCat.id] || 0, false, true);
            childrenContainer.appendChild(childItem);
        });
        
        categoryList.appendChild(childrenContainer);
    });
    
    // 添加"添加分类"按钮
    const addCategoryItem = document.createElement('div');
    addCategoryItem.className = 'category-item add-category';
    addCategoryItem.setAttribute('id', 'addCategoryBtn');
    addCategoryItem.innerHTML = `
        <div class="category-title">
            <span class="category-icon">+</span>
            <span class="category-name">添加分类</span>
        </div>
    `;
    
    categoryList.appendChild(addCategoryItem);
    
    // 直接初始化分类事件，而不是在init函数中重复绑定
    initCategoryEvents();
}

// 创建分类项元素
function createCategoryItem(category, count, isParent = false, isChild = false) {
    const categoryItem = document.createElement('div');
    
    const isActive = category.id === currentCategoryId;
    const classes = ['category-item'];
    
    if (isActive) classes.push('active');
    if (isParent) classes.push('parent-category');
    if (isChild) classes.push('child-category');
    
    categoryItem.className = classes.join(' ');
    categoryItem.setAttribute('data-id', category.id);
    
    const expandIcon = isParent ? 
        `<span class="expand-icon">${category.expanded ? '▼' : '▶'}</span>` : '';
    
    categoryItem.innerHTML = `
        <div class="category-title">
            ${expandIcon}
            <span class="category-icon">${category.icon}</span>
            <span class="category-name">${category.name}</span>
            <span class="category-count">${count}</span>
        </div>
    `;
    
    return categoryItem;
}

// 打开添加分类对话框
function openAddCategoryDialog() {
    // 检查是否已经存在添加分类模态框，如果存在则先移除
    const existingModal = document.getElementById('addCategoryModal');
    if (existingModal) {
        document.body.removeChild(existingModal);
    }

    // 创建一个简单的模态对话框
    const addCategoryModal = document.createElement('div');
    addCategoryModal.className = 'modal';
    addCategoryModal.id = 'addCategoryModal';
    addCategoryModal.style.display = 'block';
    
    // 获取所有可用的父分类
    const parentCategories = mockCategories.filter(cat => cat.isParent);
    const hasParentCategories = parentCategories.length > 0;
    
    const parentOptions = hasParentCategories 
        ? parentCategories.map(cat => `<option value="${cat.id}">${cat.name}</option>`).join('')
        : '<option value="" disabled>暂无可用父分类</option>';
    
    // 模态框内容
    addCategoryModal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>添加分类</h3>
                <span class="close" id="closeAddCategoryModal">&times;</span>
            </div>
            <div class="modal-body">
                <form id="addCategoryForm">
                    <div class="form-item">
                        <label for="categoryName">分类名称 <span class="required">*</span></label>
                        <input type="text" id="categoryName" required placeholder="请输入分类名称">
                    </div>
                    <div class="form-item">
                        <label for="categoryIcon">分类图标</label>
                        <input type="text" id="categoryIcon" placeholder="输入表情符号作为图标，如：🍎">
                        <div class="icon-picker">
                            <span class="icon-option" data-icon="📱">📱</span>
                            <span class="icon-option" data-icon="🍎">🍎</span>
                            <span class="icon-option" data-icon="🥦">🥦</span>
                            <span class="icon-option" data-icon="🥤">🥤</span>
                            <span class="icon-option" data-icon="👕">👕</span>
                            <span class="icon-option" data-icon="👖">👖</span>
                            <span class="icon-option" data-icon="👟">👟</span>
                            <span class="icon-option" data-icon="🧢">🧢</span>
                            <span class="icon-option" data-icon="💻">💻</span>
                            <span class="icon-option" data-icon="📺">📺</span>
                            <span class="icon-option" data-icon="🛒">🛒</span>
                            <span class="icon-option" data-icon="🛍️">🛍️</span>
                        </div>
                    </div>
                    <div class="form-item">
                        <label for="categoryType">分类类型</label>
                        <select id="categoryType">
                            ${hasParentCategories ? '<option value="child">子分类</option>' : ''}
                            <option value="parent">父分类</option>
                        </select>
                        ${!hasParentCategories ? '<p class="help-text">当前没有父分类，请先创建父分类</p>' : ''}
                    </div>
                    <div class="form-item" id="parentCategoryContainer" ${!hasParentCategories ? 'style="display:none"' : ''}>
                        <label for="parentCategory">所属父分类</label>
                        <select id="parentCategory">
                            ${parentOptions}
                        </select>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button class="btn" id="cancelAddCategory">取消</button>
                <button class="btn btn-primary" id="confirmAddCategory">确定</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(addCategoryModal);
    overlay.style.display = 'block';
    
    // 绑定事件
    const categoryTypeSelect = document.getElementById('categoryType');
    const parentCategoryContainer = document.getElementById('parentCategoryContainer');
    
    // A. 如果有父分类，绑定分类类型选择事件
    if (hasParentCategories) {
        // 根据分类类型显示/隐藏父分类选择器
        categoryTypeSelect.addEventListener('change', function() {
            parentCategoryContainer.style.display = 
                this.value === 'child' ? 'block' : 'none';
        });
        
        // 初始状态下显示父分类选择器（如果选择的是子分类）
        parentCategoryContainer.style.display = 
            categoryTypeSelect.value === 'child' ? 'block' : 'none';
    }
    
    // 绑定图标选择事件
    const iconOptions = document.querySelectorAll('.icon-option');
    iconOptions.forEach(option => {
        option.addEventListener('click', function() {
            document.getElementById('categoryIcon').value = this.getAttribute('data-icon');
            
            // 移除之前选中的图标样式
            iconOptions.forEach(opt => opt.classList.remove('selected'));
            
            // 添加当前选中图标样式
            this.classList.add('selected');
        });
    });
    
    // 取消按钮事件
    const cancelAddCategoryBtn = document.getElementById('cancelAddCategory');
    if (cancelAddCategoryBtn) {
        cancelAddCategoryBtn.addEventListener('click', function() {
            closeAddCategoryModal();
        });
    }
    
    // 关闭按钮事件
    const closeAddCategoryModalBtn = document.getElementById('closeAddCategoryModal');
    if (closeAddCategoryModalBtn) {
        closeAddCategoryModalBtn.addEventListener('click', function() {
            closeAddCategoryModal();
        });
    }
    
    // 确认添加按钮事件
    const confirmAddCategoryBtn = document.getElementById('confirmAddCategory');
    if (confirmAddCategoryBtn) {
        confirmAddCategoryBtn.addEventListener('click', function() {
            // 获取表单数据
            const categoryName = document.getElementById('categoryName').value.trim();
            const categoryIcon = document.getElementById('categoryIcon').value.trim() || '📂';
            const categoryType = document.getElementById('categoryType').value;
            const parentCategorySelect = document.getElementById('parentCategory');
            const parentCategoryId = parentCategorySelect && categoryType === 'child' ? parentCategorySelect.value : null;
            
            if (!categoryName) {
                alert('请输入分类名称');
                return;
            }
            
            // 如果选择子分类但没有选择父分类
            if (categoryType === 'child' && !parentCategoryId) {
                alert('请选择所属父分类');
                return;
            }
            
            // 创建新分类
            const newCategory = {
                id: 'category_' + Date.now(),
                name: categoryName,
                icon: categoryIcon,
                isParent: categoryType === 'parent',
                parentId: categoryType === 'child' ? parentCategoryId : null
            };
            
            // 如果是父分类，添加展开属性
            if (categoryType === 'parent') {
                newCategory.expanded = true;
            }
            
            // 添加到分类列表
            mockCategories.push(newCategory);
            
            // 更新分类导航
            renderCategorySidebar();
            
            // 切换到新分类
            switchCategory(newCategory.id);
            
            // 关闭模态框
            closeAddCategoryModal();
        });
    }
}

// 关闭添加分类模态框
function closeAddCategoryModal() {
    const modal = document.getElementById('addCategoryModal');
    if (modal) {
        document.body.removeChild(modal);
    }
    
    // 如果是从创建分组模态框打开的，需要恢复创建分组模态框的显示
    if (createModal.style.display === 'block') {
        overlay.style.display = 'block';
    } else {
        overlay.style.display = 'none';
    }
}

// 打开配置分类对话框
function openConfigCategoryDialog() {
    alert('分类配置功能即将上线');
}

// 渲染商品分组表格
function renderGroupsTable() {
    const tbody = groupsTable.querySelector('tbody');
    tbody.innerHTML = '';

    // 根据当前选中的分类过滤商品分组
    let filteredGroups = [];
    if (currentCategoryId === 'all') {
        filteredGroups = [...mockGoodsGroups];
    } else {
        filteredGroups = mockGoodsGroups.filter(group => group.categoryId === currentCategoryId);
    }

    if (filteredGroups.length === 0) {
        const emptyRow = document.createElement('tr');
        emptyRow.innerHTML = `<td colspan="8" class="empty-data">该分类下暂无商品分组</td>`;
        tbody.appendChild(emptyRow);
        return;
    }

    filteredGroups.forEach(group => {
        const tr = document.createElement('tr');
        
        // 获取分类名称
        const category = mockCategories.find(cat => cat.id === group.categoryId);
        const categoryName = category ? category.name : '未分类';
        
        // 格式化规格项显示
        const specItemsText = group.specItems.map(item => 
            `${item.name}(${item.values.join('、')})`
        ).join('，');
        
        tr.innerHTML = `
            <td>${group.name}</td>
            <td>${group.description}</td>
            <td>${group.goodsList.length}</td>
            <td>${specItemsText}</td>
            <td>${categoryName}</td>
            <td>${group.createdAt}</td>
            <td>${group.updatedAt}</td>
            <td>
                <button class="btn" data-id="${group.id}" onclick="editGroup('${group.id}')">编辑</button>
                <button class="btn" data-id="${group.id}" onclick="deleteGroup('${group.id}')">删除</button>
            </td>
        `;
        
        tbody.appendChild(tr);
    });
    
    // 更新分页总数
    document.getElementById('totalCount').textContent = filteredGroups.length;
}

// 打开创建分组模态框
function openCreateModal() {
    selectedGoods = [];
    currentGroupId = null;
    isEditing = false;
    specItems = [];
    currentGoodsMap = {};
    modalTitle.textContent = '创建商品分组';
    document.getElementById('groupName').value = '';
    document.getElementById('groupDesc').value = '';
    renderSpecItems();
    updateSpecMatrix();
    renderSelectedGoodsTable();
    
    // 创建分类选择下拉框
    const modalForm = document.getElementById('groupForm');
    let categorySelect = document.getElementById('groupCategory');
    
    if (!categorySelect) {
        // 创建分类选择表单项
        const categoryFormItem = document.createElement('div');
        categoryFormItem.className = 'form-item';
        
        // 构建层级分类选项
        const categoryOptions = [];
        
        // 添加所有子分类选项（按父分类分组）
        mockCategories.forEach(category => {
            if (category.isParent) {
                // 添加父分类作为分组标签（不可选）
                categoryOptions.push(`<optgroup label="${category.name}">`);
                
                // 添加该父分类下的所有子分类
                const childCategories = mockCategories.filter(cat => cat.parentId === category.id);
                childCategories.forEach(childCat => {
                    const isSelected = childCat.id === currentCategoryId;
                    categoryOptions.push(`<option value="${childCat.id}" ${isSelected ? 'selected' : ''}>${childCat.name}</option>`);
                });
                
                categoryOptions.push(`</optgroup>`);
            }
        });
        
        categoryFormItem.innerHTML = `
            <label for="groupCategory">所属分类 <span class="required">*</span></label>
            <select id="groupCategory" required>
                ${categoryOptions.join('')}
            </select>
        `;
        
        // 插入到表单的第二个位置
        const firstItem = modalForm.querySelector('.form-item');
        modalForm.insertBefore(categoryFormItem, firstItem.nextSibling);
    } else {
        // 更新已有的分类选择框
        const categoryOptions = [];
        
        // 添加所有子分类选项（按父分类分组）
        mockCategories.forEach(category => {
            if (category.isParent) {
                // 添加父分类作为分组标签（不可选）
                categoryOptions.push(`<optgroup label="${category.name}">`);
                
                // 添加该父分类下的所有子分类
                const childCategories = mockCategories.filter(cat => cat.parentId === category.id);
                childCategories.forEach(childCat => {
                    const isSelected = childCat.id === currentCategoryId;
                    categoryOptions.push(`<option value="${childCat.id}" ${isSelected ? 'selected' : ''}>${childCat.name}</option>`);
                });
                
                categoryOptions.push(`</optgroup>`);
            }
        });
        
        categorySelect.innerHTML = categoryOptions.join('');
    }
    
    createModal.style.display = 'block';
    overlay.style.display = 'block';
}

// 关闭创建分组模态框
function closeCreateModal() {
    createModal.style.display = 'none';
    overlay.style.display = 'none';
}

// 打开商品选择器
function openGoodsSelector(combinationKey) {
    selectedGoodsInSelector = [];
    // 保存当前操作的规格组合
    if (combinationKey) {
        openGoodsSelector.currentCombinationKey = combinationKey;
    } else {
        openGoodsSelector.currentCombinationKey = null;
    }
    
    renderGoodsTable(filteredGoods);
    updateSelectedCount();
    goodsSelector.style.display = 'block';
    overlay.style.display = 'block';
}

// 关闭商品选择器
function closeGoodsSelectorModal() {
    goodsSelector.style.display = 'none';
    if (createModal.style.display === 'block') {
        overlay.style.display = 'block';
    } else {
        overlay.style.display = 'none';
    }
}

// 渲染商品表格
function renderGoodsTable(goods) {
    const tbody = goodsTable.querySelector('tbody');
    tbody.innerHTML = '';

    goods.forEach(good => {
        const tr = document.createElement('tr');
        const isSelected = selectedGoodsInSelector.some(item => item.id === good.id);
        
        tr.innerHTML = `
            <td><input type="checkbox" data-id="${good.id}" ${isSelected ? 'checked' : ''}></td>
            <td><img src="${good.imageUrl}" alt="${good.name}" style="width: 50px; height: 50px;"></td>
            <td>${good.name}</td>
            <td>${good.skuCode}</td>
            <td>¥${good.price.toFixed(2)}</td>
            <td>${good.specs.join(' / ')}</td>
        `;
        
        tbody.appendChild(tr);
    });

    // 绑定复选框事件
    const checkboxes = tbody.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const goodId = this.getAttribute('data-id');
            if (this.checked) {
                const good = mockGoods.find(item => item.id === goodId);
                if (good && !selectedGoodsInSelector.some(item => item.id === goodId)) {
                    selectedGoodsInSelector.push(good);
                }
            } else {
                selectedGoodsInSelector = selectedGoodsInSelector.filter(item => item.id !== goodId);
            }
            updateSelectedCount();
            updateSelectAllState();
        });
    });

    updateSelectAllState();
}

// 更新全选状态
function updateSelectAllState() {
    const checkboxes = goodsTable.querySelectorAll('tbody input[type="checkbox"]');
    const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
    selectAll.checked = allChecked && checkboxes.length > 0;
}

// 全选/取消全选
function toggleSelectAll(checked) {
    const checkboxes = goodsTable.querySelectorAll('tbody input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        if (checkbox.checked !== checked) {
            checkbox.checked = checked;
            const goodId = checkbox.getAttribute('data-id');
            if (checked) {
                const good = mockGoods.find(item => item.id === goodId);
                if (good && !selectedGoodsInSelector.some(item => item.id === goodId)) {
                    selectedGoodsInSelector.push(good);
                }
            } else {
                selectedGoodsInSelector = selectedGoodsInSelector.filter(item => item.id !== goodId);
            }
        }
    });
    updateSelectedCount();
}

// 更新选中商品数量
function updateSelectedCount() {
    selectedCountElement.textContent = selectedGoodsInSelector.length;
}

// 确认选择商品
function confirmSelectGoods() {
    if (selectedGoodsInSelector.length === 0) {
        alert('请选择商品');
        return;
    }
    
    // 如果是针对特定规格组合
    if (openGoodsSelector.currentCombinationKey) {
        // 只取第一个选中的商品
        currentGoodsMap[openGoodsSelector.currentCombinationKey] = selectedGoodsInSelector[0];
        // 添加到总商品列表，去重
        const goods = selectedGoodsInSelector[0];
        if (!selectedGoods.some(item => item.id === goods.id)) {
            selectedGoods.push(goods);
        }
        // 更新矩阵
        updateSpecMatrix();
    } else {
        // 合并选中的商品，去重
        selectedGoods = [...selectedGoods];
        selectedGoodsInSelector.forEach(good => {
            if (!selectedGoods.some(item => item.id === good.id)) {
                selectedGoods.push(good);
            }
        });
    }
    
    renderSelectedGoodsTable();
    closeGoodsSelectorModal();
}

// 渲染已选商品表格
function renderSelectedGoodsTable() {
    const tableBody = selectedGoodsTable.querySelector('tbody');
    tableBody.innerHTML = '';
    
    // 收集所有已关联的商品
    const goodsList = Object.values(currentGoodsMap);
    
    if (goodsList.length === 0) {
        const emptyRow = document.createElement('tr');
        emptyRow.innerHTML = `
            <td colspan="6" class="empty-data">暂无关联商品</td>
        `;
        tableBody.appendChild(emptyRow);
        return;
    }
    
    goodsList.forEach((good, index) => {
        const row = document.createElement('tr');
        
        // 创建单元格内容
        row.innerHTML = `
            <td><img src="${good.imageUrl}" alt="${good.name}" style="width: 40px; height: 40px; object-fit: cover;"></td>
            <td>${good.name}</td>
            <td>${good.skuCode}</td>
            <td>¥${good.price.toFixed(2)}</td>
            <td>${good.specs ? good.specs.join(' / ') : '-'}</td>
            <td>
                <button type="button" class="btn btn-link delete-selected-goods" data-index="${index}">删除</button>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
    
    // 绑定删除按钮事件
    const deleteButtons = tableBody.querySelectorAll('.delete-selected-goods');
    deleteButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            const good = goodsList[index];
            
            // 找到对应的组合键
            const combinationKey = Object.keys(currentGoodsMap).find(
                key => currentGoodsMap[key].id === good.id
            );
            
            if (combinationKey && confirm('确定要删除此关联商品吗？')) {
                delete currentGoodsMap[combinationKey];
                updateSpecMatrix();
                renderSelectedGoodsTable();
            }
        });
    });
}

// 提交表单
function submitGroupForm() {
    const groupName = document.getElementById('groupName').value;
    const groupDesc = document.getElementById('groupDesc').value;
    const groupCategory = document.getElementById('groupCategory').value;

    if (!groupName) {
        alert('请输入分组名称');
        return;
    }

    if (!groupCategory) {
        alert('请选择所属分类');
        return;
    }

    if (specItems.length === 0) {
        alert('请添加至少一个规格项');
        return;
    }
    
    // 检查所有规格组合是否都关联了商品
    const matrix = generateSpecMatrix();
    const missingCombinations = [];
    
    matrix.forEach(combination => {
        const combinationKey = combination.join('_');
        if (!currentGoodsMap[combinationKey]) {
            missingCombinations.push(combination.join('+'));
        }
    });
    
    if (missingCombinations.length > 0) {
        alert(`以下规格组合未关联商品：\n${missingCombinations.join('\n')}`);
        return;
    }

    const currentTime = new Date().toISOString().replace('T', ' ').substring(0, 19);
    
    // 收集所有已关联的商品
    const goodsList = Object.values(currentGoodsMap);

    if (isEditing) {
        // 更新分组
        const index = mockGoodsGroups.findIndex(item => item.id === currentGroupId);
        if (index !== -1) {
            mockGoodsGroups[index] = {
                ...mockGoodsGroups[index],
                name: groupName,
                description: groupDesc,
                categoryId: groupCategory,
                goodsList: goodsList,
                specItems: [...specItems],
                updatedAt: currentTime
            };
        }
    } else {
        // 创建分组
        const newGroup = {
            id: Date.now().toString(),
            name: groupName,
            description: groupDesc,
            categoryId: groupCategory,
            createdAt: currentTime,
            updatedAt: currentTime,
            goodsList: goodsList,
            specItems: [...specItems]
        };
        mockGoodsGroups.push(newGroup);
    }

    renderCategorySidebar();
    renderGroupsTable();
    closeCreateModal();
}

// 编辑分组
function editGroup(groupId) {
    const group = mockGoodsGroups.find(g => g.id === groupId);
    if (!group) return;
    
    currentGroupId = groupId;
    isEditing = true;
    specItems = [...group.specItems];
    currentGoodsMap = {};
    
    // 将商品添加到映射中
    group.goodsList.forEach(good => {
        // 根据规格值找到对应的组合
        const specs = good.specs;
        if (specs && specs.length === specItems.length) {
            const combinationKey = specs.join('_');
            currentGoodsMap[combinationKey] = good;
        }
    });
    
    modalTitle.textContent = '编辑商品分组';
    document.getElementById('groupName').value = group.name;
    document.getElementById('groupDesc').value = group.description || '';
    
    // 更新分类选择
    const modalForm = document.getElementById('groupForm');
    let categorySelect = document.getElementById('groupCategory');
    
    if (!categorySelect) {
        // 创建分类选择表单项
        const categoryFormItem = document.createElement('div');
        categoryFormItem.className = 'form-item';
        
        // 构建层级分类选项
        const categoryOptions = [];
        
        // 添加所有子分类选项（按父分类分组）
        mockCategories.forEach(category => {
            if (category.isParent) {
                // 添加父分类作为分组标签（不可选）
                categoryOptions.push(`<optgroup label="${category.name}">`);
                
                // 添加该父分类下的所有子分类
                const childCategories = mockCategories.filter(cat => cat.parentId === category.id);
                childCategories.forEach(childCat => {
                    const isSelected = childCat.id === group.categoryId;
                    categoryOptions.push(`<option value="${childCat.id}" ${isSelected ? 'selected' : ''}>${childCat.name}</option>`);
                });
                
                categoryOptions.push(`</optgroup>`);
            }
        });
        
        categoryFormItem.innerHTML = `
            <label for="groupCategory">所属分类 <span class="required">*</span></label>
            <select id="groupCategory" required>
                ${categoryOptions.join('')}
            </select>
        `;
        
        // 插入到表单的第二个位置
        const firstItem = modalForm.querySelector('.form-item');
        modalForm.insertBefore(categoryFormItem, firstItem.nextSibling);
    } else {
        // 更新已有的分类选择框
        const categoryOptions = [];
        
        // 添加所有子分类选项（按父分类分组）
        mockCategories.forEach(category => {
            if (category.isParent) {
                // 添加父分类作为分组标签（不可选）
                categoryOptions.push(`<optgroup label="${category.name}">`);
                
                // 添加该父分类下的所有子分类
                const childCategories = mockCategories.filter(cat => cat.parentId === category.id);
                childCategories.forEach(childCat => {
                    const isSelected = childCat.id === group.categoryId;
                    categoryOptions.push(`<option value="${childCat.id}" ${isSelected ? 'selected' : ''}>${childCat.name}</option>`);
                });
                
                categoryOptions.push(`</optgroup>`);
            }
        });
        
        categorySelect.innerHTML = categoryOptions.join('');
    }
    
    renderSpecItems();
    updateSpecMatrix();
    renderSelectedGoodsTable();
    
    createModal.style.display = 'block';
    overlay.style.display = 'block';
}

// 删除分组
function deleteGroup(id) {
    if (confirm('确定要删除该分组吗?')) {
        const index = mockGoodsGroups.findIndex(item => item.id === id);
        if (index !== -1) {
            mockGoodsGroups.splice(index, 1);
            renderGroupsTable();
        }
    }
}

// 搜索分组
function searchGroups() {
    const searchName = document.getElementById('searchName').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    let filtered = [...mockGoodsGroups];

    if (searchName) {
        filtered = filtered.filter(item => item.name.includes(searchName));
    }

    if (startDate && endDate) {
        filtered = filtered.filter(item => {
            const createdAt = new Date(item.createdAt).getTime();
            return createdAt >= new Date(startDate).getTime() && createdAt <= new Date(endDate + ' 23:59:59').getTime();
        });
    }

    // 更新表格
    const tbody = groupsTable.querySelector('tbody');
    tbody.innerHTML = '';

    filtered.forEach(group => {
        const tr = document.createElement('tr');
        
        tr.innerHTML = `
            <td>${group.name}</td>
            <td>${group.description}</td>
            <td>${group.goodsList.length}</td>
            <td>${group.createdAt}</td>
            <td>${group.updatedAt}</td>
            <td>
                <button class="btn" data-id="${group.id}" onclick="editGroup('${group.id}')">编辑</button>
                <button class="btn" data-id="${group.id}" onclick="deleteGroup('${group.id}')">删除</button>
            </td>
        `;
        
        tbody.appendChild(tr);
    });
}

// 重置搜索
function resetSearch() {
    document.getElementById('searchName').value = '';
    document.getElementById('startDate').value = '';
    document.getElementById('endDate').value = '';
    renderGroupsTable();
}

// 打开规格项模态框
function openSpecItemModal() {
    // 清空规格项表单
    document.getElementById('specName').value = '';
    // 清空规格值列表，只保留一个输入框
    const specValues = document.querySelector('.spec-values');
    specValues.innerHTML = `
        <div class="spec-value-row">
            <input type="text" class="spec-value" placeholder="请输入规格值">
            <button type="button" class="btn btn-icon remove-value" style="display: none;">×</button>
        </div>
    `;
    
    // 渲染预制规格项标签
    renderPresetSpecTags();
    
    // 显示模态框
    specItemModal.style.display = 'block';
    createModal.style.display = 'none';
    overlay.style.display = 'block';
    
    // 绑定删除规格值按钮事件
    bindRemoveValueEvents();
}

// 渲染预制规格项标签
function renderPresetSpecTags() {
    const presetTagsContainer = document.getElementById('presetSpecTags');
    presetTagsContainer.innerHTML = '';
    
    // 预设规格值映射
    const presetSpecValues = {
        "商品名称": [],
        "商品规格": [],
        "品牌": [],
        "口味": ["原味", "草莓", "巧克力", "芒果", "抹茶", "香草"],
        "系列": [],
        "香型": ["浓香型", "清香型", "酱香型", "果香型"],
        "尺寸": ["S", "M", "L", "XL", "XXL"],
        "尺码": ["S", "M", "L", "XL", "XXL"],
        "品种": [],
        "款式": ["常规款", "修身款", "宽松款"],
        "颜色": ["红色", "蓝色", "绿色", "黑色", "白色", "灰色"],
        "型号": [],
        "储存方式": ["常温", "冷藏", "冷冻"],
        "加工方式": ["烘焙", "炒制", "煮制", "蒸制"]
    };
    
    presetSpecItems.forEach(item => {
        // 检查规格项是否已经添加
        const isUsed = specItems.some(specItem => specItem.name === item);
        if (!isUsed) {
            const tagElement = document.createElement('div');
            tagElement.className = 'preset-tag';
            tagElement.textContent = item;
            tagElement.addEventListener('click', function() {
                const selectedItem = this.textContent;
                document.getElementById('specName').value = selectedItem;
                
                // 如果有预设的规格值，填充规格值输入框
                const values = presetSpecValues[selectedItem] || [];
                if (values.length > 0) {
                    const specValuesContainer = document.querySelector('.spec-values');
                    specValuesContainer.innerHTML = '';
                    
                    values.forEach((value, index) => {
                        const row = document.createElement('div');
                        row.className = 'spec-value-row';
                        row.innerHTML = `
                            <input type="text" class="spec-value" placeholder="请输入规格值" value="${value}">
                            <button type="button" class="btn btn-icon remove-value">${index > 0 ? '×' : ''}</button>
                        `;
                        specValuesContainer.appendChild(row);
                    });
                    
                    // 额外添加一个空的输入框
                    const emptyRow = document.createElement('div');
                    emptyRow.className = 'spec-value-row';
                    emptyRow.innerHTML = `
                        <input type="text" class="spec-value" placeholder="请输入规格值">
                        <button type="button" class="btn btn-icon remove-value">×</button>
                    `;
                    specValuesContainer.appendChild(emptyRow);
                    
                    // 重新绑定删除按钮事件
                    bindRemoveValueEvents();
                }
            });
            presetTagsContainer.appendChild(tagElement);
        }
    });
}

// 添加规格值输入框
function addSpecValue() {
    const specValues = document.querySelector('.spec-values');
    const newRow = document.createElement('div');
    newRow.className = 'spec-value-row';
    newRow.innerHTML = `
        <input type="text" class="spec-value" placeholder="请输入规格值">
        <button type="button" class="btn btn-icon remove-value">×</button>
    `;
    specValues.appendChild(newRow);
    
    // 显示所有删除按钮
    const removeButtons = document.querySelectorAll('.remove-value');
    removeButtons.forEach(btn => {
        btn.style.display = 'inline-flex';
    });
    
    // 绑定删除按钮事件
    bindRemoveValueEvents();
}

// 绑定删除规格值按钮事件
function bindRemoveValueEvents() {
    const removeButtons = document.querySelectorAll('.remove-value');
    removeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            this.parentElement.remove();
            
            // 如果只剩一个规格值，隐藏删除按钮
            const remainingButtons = document.querySelectorAll('.remove-value');
            if (remainingButtons.length === 1) {
                remainingButtons[0].style.display = 'none';
            }
        });
    });
}

// 确认添加规格项
function confirmAddSpecItem() {
    const specName = document.getElementById('specName').value.trim();
    const specValueInputs = document.querySelectorAll('.spec-value');
    const specValues = [];
    
    // 收集规格值
    specValueInputs.forEach(input => {
        const value = input.value.trim();
        if (value) {
            specValues.push(value);
        }
    });
    
    // 验证输入
    if (!specName) {
        alert('请输入规格项名称');
        return;
    }
    
    if (specValues.length < 1) {
        alert('请至少添加一个规格值');
        return;
    }
    
    // 检查规格项名称是否重复
    if (specItems.some(item => item.name === specName)) {
        alert('规格项名称已存在，请使用其他名称');
        return;
    }
    
    // 添加到规格项列表
    specItems.push({
        name: specName,
        values: specValues
    });
    
    // 更新界面
    renderSpecItems();
    updateSpecMatrix();
    
    // 关闭模态框
    closeSpecItemModalDialog();
}

// 渲染规格项
function renderSpecItems() {
    const container = document.getElementById('specItems');
    // 保留添加按钮的行
    const addBtnRow = container.querySelector('.spec-row');
    
    // 清空除添加按钮行外的所有内容
    while (container.firstChild && container.firstChild !== addBtnRow) {
        container.removeChild(container.firstChild);
    }
    
    // 如果已有3个规格项，隐藏添加按钮
    if (specItems.length >= 3) {
        addBtnRow.style.display = 'none';
    } else {
        addBtnRow.style.display = 'flex';
    }
    
    // 为每个规格项创建UI元素
    specItems.forEach((specItem, specIndex) => {
        const specItemElement = document.createElement('div');
        specItemElement.classList.add('spec-item');
        
        // 规格项内容
        const specContent = `
            <div class="spec-item-content">
                <div class="spec-item-header">
                    <div class="spec-item-name">${specItem.name}</div>
                    <div class="spec-item-actions">
                        <span class="spec-item-action edit-spec" data-index="${specIndex}">编辑</span>
                        <span class="spec-item-action delete-spec" data-index="${specIndex}">删除</span>
                    </div>
                </div>
                <div class="spec-values-list">
                    ${specItem.values.map(value => `
                        <span class="spec-value-tag">${value}
                        </span>
                    `).join('')}
                </div>
            </div>
        `;
        
        specItemElement.innerHTML = specContent;
        
        // 插入到容器中，位于添加按钮的行之前
        container.insertBefore(specItemElement, addBtnRow);
        
        // 绑定编辑和删除按钮的事件
        const editBtn = specItemElement.querySelector('.edit-spec');
        if (editBtn) {
            editBtn.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                editSpecItem(index);
            });
        }
        
        const deleteBtn = specItemElement.querySelector('.delete-spec');
        if (deleteBtn) {
            deleteBtn.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                deleteSpecItem(index);
            });
        }
    });
}

// 编辑规格项
function editSpecItem(index) {
    currentEditingSpecIndex = index;
    const specItem = specItems[index];
    
    // 填充规格项名称
    document.getElementById('specName').value = specItem.name;
    
    // 清空规格值行
    const specValuesContainer = document.querySelector('.spec-values');
    while (specValuesContainer.firstChild) {
        specValuesContainer.removeChild(specValuesContainer.firstChild);
    }
    
    // 为每个规格值创建一行
    specItem.values.forEach((value, i) => {
        const valueRow = document.createElement('div');
        valueRow.classList.add('spec-value-row');
        
        valueRow.innerHTML = `
            <input type="text" class="spec-value" value="${value}" placeholder="请输入规格值">
            <button type="button" class="btn btn-icon remove-value" ${i === 0 && specItem.values.length === 1 ? 'style="display: none;"' : ''}>×</button>
        `;
        
        specValuesContainer.appendChild(valueRow);
        
        // 绑定删除规格值按钮事件
        const removeBtn = valueRow.querySelector('.remove-value');
        if (removeBtn) {
            removeBtn.addEventListener('click', function() {
                if (specValuesContainer.querySelectorAll('.spec-value-row').length > 1) {
                    specValuesContainer.removeChild(valueRow);
                    updateRemoveValueButtons();
                }
            });
        }
    });
    
    openSpecItemModalDialog();
}

// 删除规格项
function deleteSpecItem(index) {
    if (confirm(`确定要删除规格项"${specItems[index].name}"吗？`)) {
        specItems.splice(index, currentEditingSpecIndex = -1);
        renderSpecItems();
        updateSpecMatrix();
    }
}

// 生成规格矩阵
function generateSpecMatrix() {
    if (specItems.length === 0) {
        return [];
    }
    
    // 使用递归生成笛卡尔积
    function cartesianProduct(arrays, current = [], index = 0) {
        if (index === arrays.length) {
            return [current];
        }
        
        const result = [];
        for (const item of arrays[index]) {
            result.push(...cartesianProduct(arrays, [...current, item], index + 1));
        }
        
        return result;
    }
    
    const valueArrays = specItems.map(item => item.values);
    return cartesianProduct(valueArrays);
}

// 更新规格矩阵
function updateSpecMatrix() {
    const matrixContainer = document.getElementById('specMatrix');
    const matrixTable = document.getElementById('matrixTable');
    const noSpecsMessage = matrixContainer.querySelector('.no-specs');
    
    // 检查是否有规格项和规格值
    if (specItems.length === 0) {
        matrixTable.style.display = 'none';
        noSpecsMessage.style.display = 'block';
        return;
    }
    
    // 检查每个规格项是否都有规格值
    const hasEmptyValues = specItems.some(item => item.values.length === 0);
    if (hasEmptyValues) {
        matrixTable.style.display = 'none';
        noSpecsMessage.style.display = 'block';
        noSpecsMessage.textContent = '所有规格项必须至少有一个规格值';
        return;
    }
    
    // 显示规格矩阵表格，隐藏提示消息
    matrixTable.style.display = 'table';
    noSpecsMessage.style.display = 'none';
    
    // 清空表格内容
    const thead = matrixTable.querySelector('thead');
    const tbody = matrixTable.querySelector('tbody');
    thead.innerHTML = '';
    tbody.innerHTML = '';
    
    // 创建表头
    const headerRow = document.createElement('tr');
    specItems.forEach(item => {
        const th = document.createElement('th');
        th.textContent = item.name;
        headerRow.appendChild(th);
    });
    
    // 添加"关联商品"列
    const actionTh = document.createElement('th');
    actionTh.textContent = '关联商品';
    headerRow.appendChild(actionTh);
    
    thead.appendChild(headerRow);
    
    // 生成规格矩阵并创建表格行
    const matrix = generateSpecMatrix();
    matrix.forEach(combination => {
        const combinationKey = combination.join('_');
        const row = document.createElement('tr');
        
        // 添加规格值单元格
        combination.forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });
        
        // 添加关联商品单元格
        const goodsCell = document.createElement('td');
        if (currentGoodsMap[combinationKey]) {
            const good = currentGoodsMap[combinationKey];
            goodsCell.innerHTML = `
                <div class="linked-goods">
                    <span>${good.name}</span>
                    <div class="goods-actions">
                        <button type="button" class="btn btn-link change-goods" data-key="${combinationKey}">更换</button>
                        <button type="button" class="btn btn-link delete-goods" data-key="${combinationKey}">删除</button>
                    </div>
                </div>
            `;
        } else {
            goodsCell.innerHTML = `
                <button type="button" class="btn btn-link link-goods" data-key="${combinationKey}">+ 关联商品</button>
            `;
        }
        row.appendChild(goodsCell);
        
        tbody.appendChild(row);
    });
    
    // 绑定关联商品按钮事件
    const linkButtons = matrixTable.querySelectorAll('.link-goods, .change-goods');
    linkButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const combinationKey = this.getAttribute('data-key');
            openGoodsSelector(combinationKey);
        });
    });
    
    // 绑定删除关联商品按钮事件
    const deleteButtons = matrixTable.querySelectorAll('.delete-goods');
    deleteButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const combinationKey = this.getAttribute('data-key');
            if (confirm('确定要删除此关联商品吗？')) {
                delete currentGoodsMap[combinationKey];
                updateSpecMatrix();
                renderSelectedGoodsTable();
            }
        });
    });
}

// 关闭规格项模态框
function closeSpecItemModalDialog() {
    specItemModal.style.display = 'none';
    createModal.style.display = 'block';
    overlay.style.display = 'block';
}

// 更新规格值删除按钮状态
function updateRemoveValueButtons() {
    const specValueRows = document.querySelectorAll('.spec-value-row');
    if (specValueRows.length === 1) {
        // 如果只有一个规格值，隐藏删除按钮
        specValueRows[0].querySelector('.remove-value').style.display = 'none';
    } else {
        // 否则显示所有删除按钮
        specValueRows.forEach(row => {
            row.querySelector('.remove-value').style.display = 'inline-flex';
        });
    }
}

// 初始化展开/折叠已关联商品
let isGoodsExpanded = false;
function initExpandGoods() {
    const selectedGoodsTable = document.getElementById('selectedGoodsTable');
    
    expandGoodsBtn.addEventListener('click', function() {
        isGoodsExpanded = !isGoodsExpanded;
        if (isGoodsExpanded) {
            selectedGoodsTable.parentElement.style.maxHeight = 'none';
            expandGoodsBtn.textContent = '收起';
        } else {
            selectedGoodsTable.parentElement.style.maxHeight = '300px';
            expandGoodsBtn.textContent = '展开';
        }
    });
}

// 定义全局函数
window.editGroup = editGroup;
window.deleteGroup = deleteGroup;

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init); 