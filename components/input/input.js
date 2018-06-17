// components/input.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['i-class'],
  behaviors: ['wx://form-field'],
  properties: {
    title: {
      type: String
    },
    type: {
      type: String,
      value: 'text'
    },
    disabled: {
      type: Boolean,
      value: false
    },
    placeholder: {
        type: String,
        value: ''
    },
    autofocus: {
        type: Boolean,
        value: false
    },
    mode: {
        type: String,
        value: 'normal'
    },
    right: {
        type: Boolean,
        value: false
    },
    error: {
        type: Boolean,
        value: false
    },
    maxlength: {
        type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleInputChange(event) {
      const { detail = {} } = event;
      const { value = '' } = detail;
      this.setData({ value });
      this.triggerEvent('change', event);
    },

    handleInputFocus(event) {
        this.triggerEvent('focus', event);
    },

    handleInputBlur(event) {
        this.triggerEvent('blur', event);
    }
  }
})
