<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-07-22 10:51:01
-->
<template>
  <div>
    <div>
      <button class="my-button" @click="reset">重置输入框</button>
      <button class="my-button" @click="newNode">新增</button>
      <button class="my-button" @click="updateNode">更新</button>
      <button class="my-button" @click="showNode">查看</button>
      <button class="my-button" @click="clearNode">清空</button>
    </div>
    <div>
      <input ref="input" type="text" :value="textVal"  @change="onChange" @input="onInput"/>
    </div>
  </div>
</template>

<script>

export default {
  //数据
  data() {
    return {
      //input引用
      input: undefined,
      //更新次数
      updateTime: 1,
      bus:new this.$fox.Bus()
    };
  },
  created(){
     
  },
  //计算
  computed: {
    textVal() {
      return this.bus.global.text.value;
    },
    
  },
  watch: {
    'bus.global.text.value': (newVal, oldVal) => {
      console.info(`watch newValue${newVal}, oldValue:${oldVal}`);
    },
  },
  //方法
  methods: {
    //on input
    onInput() {
      let el = this.$refs.input;
      this.bus.global.text.value = el.value;
    },
    //on change
    onChange() {
      let el = this.$refs.input;
      this.bus.global.text.value = el.value;
    },
    //reset
    reset() {
      this.bus.global.text.value = "";
    },
    newNode() {
      //api方式创建单层节点
      this.bus.put("single_a", "单层api数据");
      //属性方式创建多层节点
      this.bus.single_b.value = "单层property数据";

      //api方式创建多层节点
      this.bus.put("leve_1_a", "leve_2_a", "多层api数据");
      //属性方式创建多层节点（leve_2_b的数据节点）
      this.bus.leve_1_b.leve_2_b.value = "多层propery数据1";
      //属性方式创建多层节点（leve_2_b下面的节点）
      this.bus.leve_1_b.leve_2_b.leve_3_b.value = "多层propery数据2";
      //属性方式创建多层节点(leve_1_b上分支)
      this.bus.leve_1_b.leve_2_c.value = "多层propery数据3";
    },
    updateNode() {
      //修改次数
      this.updateTime++;
      //api方式更新单层节点
      this.bus.put("single_a", `单层api数据-${this.updateTime}`);
      //属性方式更新多层节点
      this.bus.single_b.value = `单层property数据-${this.updateTime}`;

      //api方式更新多层节点
      this.bus.put("leve_1_a", "leve_2_a", `多层api数据-${this.updateTime}`);
      //属性方式更新多层节点（leve_2_b的数据节点）
      this.bus.leve_1_b.leve_2_b.value = `多层propery数据1-${this.updateTime}`;
      //属性方式更新多层节点（leve_2_b下面的节点）
      this.bus.leve_1_b.leve_2_b.leve_3_b.value = `多层propery数据2-${this.updateTime}`;
      //属性方式更新多层节点(leve_1_b上分支)
      this.bus.leve_1_b.leve_2_c.value = `多层propery数据3-${this.updateTime}`;
    },
    showNode() {
      //api方式查看单层节点
      let value = this.bus.get("single_a");
      console.info(`api方式更新单层节点 value:${value}`);

      //属性方式查看多层节点
      value = this.bus.single_b.value;
      console.info(`单层property数据 value:${value}`);

      //api方式查看多层节点
      value = this.bus.get("leve_1_a", "leve_2_a");
      console.info(`多层api数据 value:${value}`);

      //属性方式查看多层节点（leve_2_b的数据节点）
      value = this.bus.leve_1_b.leve_2_b.value;
      console.info(`多层propery数据1 value:${value}`);

      //属性方式查看多层节点（leve_2_b下面的节点）
      value = this.bus.leve_1_b.leve_2_b.leve_3_b.value;
      console.info(`多层propery数据2 value:${value}`);

      //属性方式查看多层节点(leve_1_b上分支)
      value = this.bus.leve_1_b.leve_2_c.value;
      console.info(`多层propery数据3 value:${value}`);
    },
    clearNode() {
      //清空数据 api 只需要删除根节点
      this.bus.remove("single_a");

      //清空数据 api 只需要删除根节点
      this.bus.remove("leve_1_a");

      //清空数据 property 只需要删除根节点 设置undefined就代表删除节点数据
      this.bus.leve_1_b = undefined;
    },
  },
};
</script>

