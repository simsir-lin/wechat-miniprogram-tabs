Component({
  relations: {
    './tab': {
      type: 'child', // 关联的目标节点应为子节点
      linked: function (target) {
        // 每次有custom-li被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
        target.toggleStatus(this.data.current == this.data.tabs.length)
        this.data.tabs.push({
          title: target.data.label,
          index: this.data.tabs.length
        })
        this.setData({
          tabs: this.data.tabs
        })
      },
      linkChanged: function (target) {
        // 每次有custom-li被移动后执行，target是该节点实例对象，触发在该节点moved生命周期之后
      },
      unlinked: function (target) {
        // 每次有custom-li被移除时执行，target是该节点实例对象，触发在该节点detached生命周期之后
      }
    }
  },
  properties: {
    current: {
      type: Number,
      value: 0
    },
    activeColor: {
      type: String,
      value: '#333333'
    },
    background: {
      type: String,
      value: '#ffffff'
    }
  },
  data: {
    tabs: [],
    pagex: 0
  },

  attached: function () {    
  },
  moved: function () {
  },
  detached: function () {
  },

  methods: {
    handleTouchStart: function (e) {
      this.data.pagex = e.touches[0].pageX
    },
    handleTouchCancel: function () {

    },
    handleTouchMove: function (e) {

    },
    handleTouchEnd: function (e) {
      let pagex = e.changedTouches[0].pageX;
      let res = pagex - this.data.pagex;
      let left = res < 0;
      let current = this.data.current;
      if (Math.abs(res) > 80) {
        if (current == (this.data.tabs.length - 1) && left) {
          current = 0
        } else if (current <= 0 && !left) {
          current = (this.data.tabs.length - 1);
        } else {
          current = current + (left ? 1 : - 1)
        }
        this._tabclick(current);
      }
    },
    toggleTab: function (e) {
      this._tabclick(e.currentTarget.dataset.index);
    },
    _tabclick: function (index) {
      this.setData({
        current: index
      })
      let nodes = this.getRelationNodes('./tab');
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].toggleStatus(index == i);
      }
      this.triggerEvent('change', { index: Number(index) });
    }
  }
})