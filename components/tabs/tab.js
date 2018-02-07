Component({
  relations: {
    './tabs': {
      type: 'parent', // 关联的目标节点应为父节点
      linked: function (target) {
        // 每次被插入到custom-ul时执行，target是custom-ul节点实例对象，触发在attached生命周期之后
      },
      linkChanged: function (target) {
        // 每次被移动后执行，target是custom-ul节点实例对象，触发在moved生命周期之后
      },
      unlinked: function (target) {
        // 每次被移除时执行，target是custom-ul节点实例对象，触发在detached生命周期之后
      }
    }
  },
  properties: {
    label: {
      type: String,
      value: ''
    }
  },
  data: {
    show: false,
    animationData: null
  },

  created: function () {

  },
  attached: function () {
    if (this.data.label.length <= 0) {
      console.warn(`./utils/tabs/tab.wxml`);
      console.warn(`\"tab\"组件必须设置label属性 }`);
    }
    this.animation = wx.createAnimation({
      duration: 500,
      timingFunction: "ease",
    })
  },
  moved: function () {
  },
  detached: function () {
  },

  methods: {
    toggleStatus: function (res) {
      this.animation.translateY(50).opacity(0).step();
      this.setData({
        show: res,
        animationData: this.animation.export()
      })
      setTimeout(() => {
        this.animation.translateY(0).opacity(1).step();
        this.setData({
          animationData: this.animation.export()
        })
      }, 100)
    }
  }
})