<template>
  <div>
    <div id="toolbar">
      <select class="ql-size">
        <option value="small">小</option>
        <option selected value="normal">中</option>
        <option value="large">大</option>
        <option value="huge">特大</option>
      </select>
      <select class="ql-header">
        <option value="1">标题1</option>
        <option value="2">标题2</option>
        <option value="3">标题3</option>
        <option value="4">标题4</option>
        <option value="5">标题5</option>
      </select>
      <select class="ql-color" title="文字颜色">
        <option selected="selected"></option>
        <option value="#e60000"></option>
        <option value="#ff9900"></option>
        <option value="#ffff00"></option>
        <option value="#008a00"></option>
        <option value="#0066cc"></option>
        <option value="#9933ff"></option>
        <option value="#ffffff"></option>
        <option value="#facccc"></option>
        <option value="#ffebcc"></option>
        <option value="#ffffcc"></option>
        <option value="#cce8cc"></option>
        <option value="#cce0f5"></option>
        <option value="#ebd6ff"></option>
        <option value="#bbbbbb"></option>
        <option value="#f06666"></option>
        <option value="#ffc266"></option>
        <option value="#ffff66"></option>
        <option value="#66b966"></option>
        <option value="#66a3e0"></option>
        <option value="#c285ff"></option>
        <option value="#888888"></option>
        <option value="#a10000"></option>
        <option value="#b26b00"></option>
        <option value="#b2b200"></option>
        <option value="#006100"></option>
        <option value="#0047b2"></option>
        <option value="#6b24b2"></option>
        <option value="#444444"></option>
        <option value="#5c0000"></option>
        <option value="#663d00"></option>
        <option value="#666600"></option>
        <option value="#003700"></option>
        <option value="#002966"></option>
        <option value="#3d1466"></option>
      </select>
      <select class="ql-background" title="选择文字背景色">
        <option value="#000000"></option>
        <option value="#e60000"></option>
        <option value="#ff9900"></option>
        <option value="#ffff00"></option>
        <option value="#008a00"></option>
        <option value="#0066cc"></option>
        <option value="#9933ff"></option>
        <option selected="selected"></option>
        <option value="#facccc"></option>
        <option value="#ffebcc"></option>
        <option value="#ffffcc"></option>
        <option value="#cce8cc"></option>
        <option value="#cce0f5"></option>
        <option value="#ebd6ff"></option>
        <option value="#bbbbbb"></option>
        <option value="#f06666"></option>
        <option value="#ffc266"></option>
        <option value="#ffff66"></option>
        <option value="#66b966"></option>
        <option value="#66a3e0"></option>
        <option value="#c285ff"></option>
        <option value="#888888"></option>
        <option value="#a10000"></option>
        <option value="#b26b00"></option>
        <option value="#b2b200"></option>
        <option value="#006100"></option>
        <option value="#0047b2"></option>
        <option value="#6b24b2"></option>
        <option value="#444444"></option>
        <option value="#5c0000"></option>
        <option value="#663d00"></option>
        <option value="#666600"></option>
        <option value="#003700"></option>
        <option value="#002966"></option>
        <option value="#3d1466"></option>
      </select>

      <button class="ql-image" title="插入图片"></button>
      <button class="ql-formula" title="插入公式"></button>
      <button class="ql-align" title="左对齐"></button>
      <button class="ql-align" value="center" title="居中对齐"></button>
      <button class="ql-align" value="right" title="右对齐"></button>
      <button class="ql-list" value="ordered" title="有序排序"></button>
      <button class="ql-list" value="bullet" title="无序排序"></button>
      <button class="ql-script" value="super" title="上标"></button>
      <button class="ql-script" value="sub" title="下标"></button>
      <button class="ql-indent" value="-1" title="增加缩进"></button>
      <button class="ql-indent" value="+1" title="减少缩进"></button>
      <button class="ql-direction" value="rtl" title="更改文本方向"></button>

      <button class="ql-bold" title="粗体"></button>
      <button class="ql-italic" title="斜体"></button>
      <button class="ql-underline" title="下划线"></button>
      <button class="ql-strike" title="删除线"></button>
      <button class="ql-blockquote" title="块引用"></button>
      <button class="ql-code-block" title="代码块"></button>
    </div>
    <div id="editor"></div>
  </div>
</template>

<script>
import Quill from "quill";
import "quill/dist/quill.snow.css";

export default {
  name: "BaseQuill",
  data() {
    return {
      quill: null,
    };
  },
  async mounted() {
    this.initEditor();
  },
  methods: {
    handleGetContent() {
      const contents = this.quill.getContents();
      console.log(contents);
    },
    initEditor() {
      const options = {
        modules: {
          toolbar: "#toolbar",
        },
        formats: {
          size: ["small", "normal", "large", "huge"],
        },
        placeholder: "请输入内容",
        theme: "snow", // or 'bubble'
      };
      const quill = new Quill("#editor", options);
      this.quill = quill;
      // this.quill.setContents()
    },
  },
};
</script>

<style>
#editor {
  height: 500px;
}
</style>
