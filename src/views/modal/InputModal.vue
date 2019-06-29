<template>
  <div>
    <div class="container">
      <div class="space-bottom_24">
        <a-button type="primary" @click="showModal_860">860宽</a-button>
      </div>
      <div class="ant-modal-content space-bottom_24" style="width:860px"><button aria-label="Close" class="ant-modal-close"><span class="ant-modal-close-x"><i class="ant-modal-close-icon anticon anticon-close"><svg
        viewBox="64 64 896 896"
        data-icon="close"
        width="1em"
        height="1em"
        fill="currentColor"
        aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg></i></span></button><div class="ant-modal-header"><div id="rcDialogTitle0" class="ant-modal-title">新建任务</div></div><div class="ant-modal-body"><div data-v-a60f3142="" data-show="true" class="ant-alert ant-alert-error ant-alert-banner ant-alert-closable"><i class="ant-alert-icon anticon anticon-close-circle"><svg
          viewBox="64 64 896 896"
          data-icon="close-circle"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path></svg></i><span class="ant-alert-message">错误提示的文案</span><span class="ant-alert-description"></span><a class="ant-alert-close-icon"><i class="anticon anticon-close"><svg
            viewBox="64 64 896 896"
            data-icon="close"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg></i></a></div><form data-v-a60f3142="" class="ant-form ant-form-horizontal"><div data-v-a60f3142="" class="ant-row ant-form-item" style="margin-top: 24px;"><div class="ant-col-5 ant-form-item-label"><label title="创建人" class="">创建人</label></div><div class="ant-col-16 ant-form-item-control-wrapper"><div class="ant-form-item-control"><span class="ant-form-item-children"><span data-v-a60f3142="">--</span></span><!----></div></div></div><div data-v-a60f3142="" class="ant-row ant-form-item"><div class="ant-col-5 ant-form-item-label"><label for="taskName" title="任务名称" class="ant-form-item-required">任务名称</label></div><div class="ant-col-16 ant-form-item-control-wrapper"><div class="ant-form-item-control"><span class="ant-form-item-children"><input
              data-v-a60f3142=""
              type="text"
              data-__meta="[object Object]"
              data-__field="[object Object]"
              id="taskName"
              class="ant-input"></span><!----></div></div></div><div data-v-a60f3142="" class="ant-row ant-form-item"><div class="ant-col-5 ant-form-item-label"><label for="range-picker" title="起止时间" class="ant-form-item-required">起止时间</label></div><div class="ant-col-16 ant-form-item-control-wrapper"><div class="ant-form-item-control"><span class="ant-form-item-children"><span
                data-v-a60f3142=""
                tabindex="0"
                class="ant-calendar-picker"
                data-__meta="[object Object]"
                data-__field="[object Object]"
                id="range-picker"><span class="ant-calendar-picker-input ant-input"><input readonly="true" placeholder="开始日期" tabindex="-1" class="ant-calendar-range-picker-input"><span class="ant-calendar-range-picker-separator"> ~ </span><input readonly="true" placeholder="结束日期" tabindex="-1" class="ant-calendar-range-picker-input"><i class="ant-calendar-picker-icon anticon anticon-calendar"><svg
                  viewBox="64 64 896 896"
                  data-icon="calendar"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"><path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path></svg></i></span></span></span><!----></div></div></div><div data-v-a60f3142="" class="ant-row ant-form-item"><div class="ant-col-5 ant-form-item-label"><label for="leader" title="任务负责人" class="ant-form-item-required">任务负责人</label></div><div class="ant-col-16 ant-form-item-control-wrapper"><div class="ant-form-item-control"><span class="ant-form-item-children"><div data-v-a60f3142="" class="ant-select ant-select-enabled" data-__meta="[object Object]" data-__field="[object Object]" id="leader"><div
                    role="combobox"
                    aria-autocomplete="list"
                    aria-haspopup="true"
                    aria-controls="cf2633a8-da74-4fff-c1c9-dbdbae9e6c5e"
                    tabindex="0"
                    class="ant-select-selection ant-select-selection--single"><div class="ant-select-selection__rendered"><div unselectable="on" class="ant-select-selection__placeholder" style="display: block; user-select: none;">请选择</div></div><span unselectable="on" class="ant-select-arrow" style="user-select: none;"><i class="ant-select-arrow-icon anticon anticon-down"><svg
                      viewBox="64 64 896 896"
                      data-icon="down"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></i></span></div></div></span><!----></div></div></div><div data-v-a60f3142="" class="ant-row ant-form-item"><div class="ant-col-5 ant-form-item-label"><label title="产品描述" class="">产品描述</label></div><div class="ant-col-16 ant-form-item-control-wrapper"><div class="ant-form-item-control"><span class="ant-form-item-children"><textarea data-v-a60f3142="" placeholder="请输入至少五个字符" rows="4" class="ant-input"></textarea></span><!----></div></div></div><div data-v-a60f3142="" class="ant-row ant-form-item"><div class="ant-col-12 ant-col-offset-5 ant-form-item-control-wrapper"><div class="ant-form-item-control"><span class="ant-form-item-children"></span><!----></div></div></div></form></div><div class="ant-modal-footer"><div><button type="button" class="ant-btn ant-btn-default"><span>取 消</span></button><button type="button" class="ant-btn ant-btn-primary"><span>确 定</span></button></div></div></div>
      <div class="space-bottom_24">
        <a-button type="primary" @click="showModal">640宽</a-button>
      </div>
      <div class="ant-modal-content space-bottom_24" style="width:640px"><button aria-label="Close" class="ant-modal-close"><span class="ant-modal-close-x"><i class="ant-modal-close-icon anticon anticon-close"><svg
        viewBox="64 64 896 896"
        data-icon="close"
        width="1em"
        height="1em"
        fill="currentColor"
        aria-hidden="true" ><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg></i></span></button><div class="ant-modal-header"><div id="rcDialogTitle0" class="ant-modal-title">新建任务</div></div><div class="ant-modal-body"><div data-v-a60f3142="" data-show="true" class="ant-alert ant-alert-error ant-alert-banner ant-alert-closable"><i class="ant-alert-icon anticon anticon-close-circle"><svg
          viewBox="64 64 896 896"
          data-icon="close-circle"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true" ><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path></svg></i><span class="ant-alert-message">错误提示的文案</span><span class="ant-alert-description"></span><a class="ant-alert-close-icon"><i class="anticon anticon-close"><svg
            viewBox="64 64 896 896"
            data-icon="close"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg></i></a></div><form data-v-a60f3142="" class="ant-form ant-form-horizontal"><div data-v-a60f3142="" class="ant-row ant-form-item" style="margin-top: 24px;"><div class="ant-col-5 ant-form-item-label"><label title="创建人" class="">创建人</label></div><div class="ant-col-16 ant-form-item-control-wrapper"><div class="ant-form-item-control"><span class="ant-form-item-children"><span data-v-a60f3142="">--</span></span><!----></div></div></div><div data-v-a60f3142="" class="ant-row ant-form-item"><div class="ant-col-5 ant-form-item-label"><label for="taskName" title="任务名称" class="ant-form-item-required">任务名称</label></div><div class="ant-col-16 ant-form-item-control-wrapper"><div class="ant-form-item-control"><span class="ant-form-item-children"><input
              data-v-a60f3142=""
              type="text"
              data-__meta="[object Object]"
              data-__field="[object Object]"
              id="taskName"
              class="ant-input"></span><!----></div></div></div><div data-v-a60f3142="" class="ant-row ant-form-item"><div class="ant-col-5 ant-form-item-label"><label for="range-picker" title="起止时间" class="ant-form-item-required">起止时间</label></div><div class="ant-col-16 ant-form-item-control-wrapper"><div class="ant-form-item-control"><span class="ant-form-item-children"><span
                data-v-a60f3142=""
                tabindex="0"
                class="ant-calendar-picker"
                data-__meta="[object Object]"
                data-__field="[object Object]"
                id="range-picker"><span class="ant-calendar-picker-input ant-input"><input readonly="true" placeholder="开始日期" tabindex="-1" class="ant-calendar-range-picker-input"><span class="ant-calendar-range-picker-separator"> ~ </span><input readonly="true" placeholder="结束日期" tabindex="-1" class="ant-calendar-range-picker-input"><i class="ant-calendar-picker-icon anticon anticon-calendar"><svg
                  viewBox="64 64 896 896"
                  data-icon="calendar"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"><path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path></svg></i></span></span></span><!----></div></div></div><div data-v-a60f3142="" class="ant-row ant-form-item"><div class="ant-col-5 ant-form-item-label"><label for="leader" title="任务负责人" class="ant-form-item-required">任务负责人</label></div><div class="ant-col-16 ant-form-item-control-wrapper"><div class="ant-form-item-control"><span class="ant-form-item-children"><div data-v-a60f3142="" class="ant-select ant-select-enabled" data-__meta="[object Object]" data-__field="[object Object]" id="leader"><div
                    role="combobox"
                    aria-autocomplete="list"
                    aria-haspopup="true"
                    aria-controls="cf2633a8-da74-4fff-c1c9-dbdbae9e6c5e"
                    tabindex="0"
                    class="ant-select-selection ant-select-selection--single"><div class="ant-select-selection__rendered"><div unselectable="on" class="ant-select-selection__placeholder" style="display: block; user-select: none;">请选择</div></div><span unselectable="on" class="ant-select-arrow" style="user-select: none;"><i class="ant-select-arrow-icon anticon anticon-down"><svg
                      viewBox="64 64 896 896"
                      data-icon="down"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></i></span></div></div></span><!----></div></div></div><div data-v-a60f3142="" class="ant-row ant-form-item"><div class="ant-col-5 ant-form-item-label"><label title="产品描述" class="">产品描述</label></div><div class="ant-col-16 ant-form-item-control-wrapper"><div class="ant-form-item-control"><span class="ant-form-item-children"><textarea data-v-a60f3142="" placeholder="请输入至少五个字符" rows="4" class="ant-input"></textarea></span><!----></div></div></div><div data-v-a60f3142="" class="ant-row ant-form-item"><div class="ant-col-12 ant-col-offset-5 ant-form-item-control-wrapper"><div class="ant-form-item-control"><span class="ant-form-item-children"></span><!----></div></div></div></form></div><div class="ant-modal-footer"><div><button type="button" class="ant-btn ant-btn-default"><span>取 消</span></button><button type="button" class="ant-btn ant-btn-primary"><span>确 定</span></button></div></div></div>
      <div class="space-bottom_24">
        <a-button type="primary" @click="showDocument">480宽</a-button>
      </div>
      <div class="ant-modal-content space-bottom_24" style="width:480px"><button aria-label="Close" class="ant-modal-close"><span class="ant-modal-close-x"><i class="ant-modal-close-icon anticon anticon-close"><svg
        viewBox="64 64 896 896"
        data-icon="close"
        width="1em"
        height="1em"
        fill="currentColor"
        aria-hidden="true" ><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg></i></span></button><div class="ant-modal-header"><div id="rcDialogTitle0" class="ant-modal-title">新建任务</div></div><div class="ant-modal-body"><div data-v-a60f3142="" data-show="true" class="ant-alert ant-alert-error ant-alert-banner ant-alert-closable"><i class="ant-alert-icon anticon anticon-close-circle"><svg
          viewBox="64 64 896 896"
          data-icon="close-circle"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true" ><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path></svg></i><span class="ant-alert-message">错误提示的文案</span><span class="ant-alert-description"></span><a class="ant-alert-close-icon"><i class="anticon anticon-close"><svg
            viewBox="64 64 896 896"
            data-icon="close"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg></i></a></div><form data-v-a60f3142="" class="ant-form ant-form-horizontal"><div data-v-a60f3142="" class="ant-row ant-form-item" style="margin-top: 24px;"><div class="ant-col-5 ant-form-item-label"><label title="创建人" class="">创建人</label></div><div class="ant-col-16 ant-form-item-control-wrapper"><div class="ant-form-item-control"><span class="ant-form-item-children"><span data-v-a60f3142="">--</span></span><!----></div></div></div><div data-v-a60f3142="" class="ant-row ant-form-item"><div class="ant-col-5 ant-form-item-label"><label for="taskName" title="任务名称" class="ant-form-item-required">任务名称</label></div><div class="ant-col-16 ant-form-item-control-wrapper"><div class="ant-form-item-control"><span class="ant-form-item-children"><input
              data-v-a60f3142=""
              type="text"
              data-__meta="[object Object]"
              data-__field="[object Object]"
              id="taskName"
              class="ant-input"></span><!----></div></div></div><div data-v-a60f3142="" class="ant-row ant-form-item"><div class="ant-col-5 ant-form-item-label"><label for="range-picker" title="起止时间" class="ant-form-item-required">起止时间</label></div><div class="ant-col-16 ant-form-item-control-wrapper"><div class="ant-form-item-control"><span class="ant-form-item-children"><span
                data-v-a60f3142=""
                tabindex="0"
                class="ant-calendar-picker"
                data-__meta="[object Object]"
                data-__field="[object Object]"
                id="range-picker"><span class="ant-calendar-picker-input ant-input"><input readonly="true" placeholder="开始日期" tabindex="-1" class="ant-calendar-range-picker-input"><span class="ant-calendar-range-picker-separator"> ~ </span><input readonly="true" placeholder="结束日期" tabindex="-1" class="ant-calendar-range-picker-input"><i class="ant-calendar-picker-icon anticon anticon-calendar"><svg
                  viewBox="64 64 896 896"
                  data-icon="calendar"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"><path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path></svg></i></span></span></span><!----></div></div></div><div data-v-a60f3142="" class="ant-row ant-form-item"><div class="ant-col-5 ant-form-item-label"><label for="leader" title="任务负责人" class="ant-form-item-required">任务负责人</label></div><div class="ant-col-16 ant-form-item-control-wrapper"><div class="ant-form-item-control"><span class="ant-form-item-children"><div data-v-a60f3142="" class="ant-select ant-select-enabled" data-__meta="[object Object]" data-__field="[object Object]" id="leader"><div
                    role="combobox"
                    aria-autocomplete="list"
                    aria-haspopup="true"
                    aria-controls="cf2633a8-da74-4fff-c1c9-dbdbae9e6c5e"
                    tabindex="0"
                    class="ant-select-selection ant-select-selection--single"><div class="ant-select-selection__rendered"><div unselectable="on" class="ant-select-selection__placeholder" style="display: block; user-select: none;">请选择</div></div><span unselectable="on" class="ant-select-arrow" style="user-select: none;"><i class="ant-select-arrow-icon anticon anticon-down"><svg
                      viewBox="64 64 896 896"
                      data-icon="down"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></i></span></div></div></span><!----></div></div></div><div data-v-a60f3142="" class="ant-row ant-form-item"><div class="ant-col-5 ant-form-item-label"><label title="产品描述" class="">产品描述</label></div><div class="ant-col-16 ant-form-item-control-wrapper"><div class="ant-form-item-control"><span class="ant-form-item-children"><textarea data-v-a60f3142="" placeholder="请输入至少五个字符" rows="4" class="ant-input"></textarea></span><!----></div></div></div><div data-v-a60f3142="" class="ant-row ant-form-item"><div class="ant-col-12 ant-col-offset-5 ant-form-item-control-wrapper"><div class="ant-form-item-control"><span class="ant-form-item-children"></span><!----></div></div></div></form></div><div class="ant-modal-footer"><div><button type="button" class="ant-btn ant-btn-default"><span>取 消</span></button><button type="button" class="ant-btn ant-btn-primary"><span>确 定</span></button></div></div></div>
    	<div class="space-bottom_24">
        	<a-button type="primary" @click="showRemarks">218宽</a-button>
    	</div>
    </div>
    <!--640-->
    <a-modal
      title="新建任务"
      :visible="visible"
      @ok="handleSubmit"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel"
      :width="width"
    >
      <a-alert type="error" message="错误提示的文案" banner closable />
      <a-form
        :form="form"
        @submit="handleSubmit">
        <a-form-item
          style="margin-top:24px"
          label="创建人"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <span>--</span>
        </a-form-item>
        <a-form-item
          label="任务名称"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'taskName',
              {rules: [{ required: true, message: '请输入你的任务名称' }]}
            ]"
          />
        </a-form-item>
        <a-form-item
          label="起止时间"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-range-picker v-decorator="['range-picker', {rules: [{ type: 'array', required: true, message: '请选择时间范围' }]}]" />
        </a-form-item>
        <a-form-item
          label="任务负责人"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-select
            v-decorator="[
              'leader',
              {rules: [{ required: true, message: '请选择负责人' }]}
            ]"
            placeholder="请选择"
            @change="handleSelectChange"
          >
            <a-select-option value="zhangsan">
              张三
            </a-select-option>
            <a-select-option value="lisi">
              李四
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          label="产品描述"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-textarea placeholder="请输入至少五个字符" :rows="4"/>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        </a-form-item>
      </a-form>
    </a-modal>
    
    
    <!--480-->
    <a-modal
      title="新建文档"
      :visible="visible2"
      @ok="handleSubmit"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel2"
      :width="width"
    >
    <span style="position:relative;left:70px;top:-60px;color:#ccc;font-size:12px;">辅助信息</span>
      <a-form
        :form="form"
        @submit="handleSubmit">
        <a-form-item
          label="产品名称"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input placeholder="请输入"/>
        </a-form-item>
        <a-form-item
          label="产品描述"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-textarea placeholder="请输入至少五个字符" :rows="4"/>
        </a-form-item>
      </a-form>
    </a-modal>
    
    <!--218-->
    <a-modal
      title="修改备注"
      :visible="visible3"
      @ok="handleSubmit"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel3"
      :width="width"
    >
      <a-form
        :form="form"
        @submit="handleSubmit">
        <a-form-item>
          <a-input placeholder="请输入" style="margin-bottom:-37px;display: block;"/>
        </a-form-item>
      </a-form>
    </a-modal>
    
    <!--860-->
    <a-modal
      title="账单调整"
      :visible="visible1"
      @ok="handleSubmit1"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel1"
      :width="860"
    >
      <a-form
        class="ant-advanced-search-form"
        :form="form"
        @submit="handleSubmit">
        <a-row :gutter="24">
          <a-col :span="10" offset="2">
            <a-form-item label="支付宝账户："
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            >
              <span>AntDesign@test.com</span>
            </a-form-item>
          </a-col>
          <a-col :span="10">
            <a-form-item label="产品"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            >
              <span>--</span>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="10" offset="2">
            <a-form-item label="商户登录ID："
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            >
              <span>城里的月光</span>
            </a-form-item>
          </a-col>
          <a-col :span="10">
            <a-form-item label="结算方式"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            >
              <span>--</span>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="10" offset="2">
            <a-form-item label="合约号"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            >
              <span>--</span>
            </a-form-item>
          </a-col>
          <a-col :span="10">
            <a-form-item label="币种"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            >
              <span>--</span>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="10" offset="2">
            <a-form-item label="调整账单日期"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            >
              <span>--</span>
            </a-form-item>
          </a-col>
          <a-col :span="10">
            <a-form-item label="当前会计日期"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            >
              <span>--</span>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="10" offset="2">
            <a-form-item label="调整金额"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            >
              <a-input
              	 v-decorator="[
	              'taskName',
	              {rules: [{ required: true, message: '请输入调整金额' }],}
	            ]"
              	addonBefore="￥" defaultValue="-100" style="width:210px" />
            </a-form-item>
          </a-col>
          <a-col :span="10">
            <a-form-item label="调整后金额"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            >
              <span style="color:red">--</span>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="10" offset="2">
            <a-form-item label="计费依据"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            >
              <a-select defaultValue="lucy" style="width: 210px" @change="handleChange"
              	v-decorator="[
	              'leader',
	              {rules: [{ required: true, message: '请选择计费依据' }]}
	            ]"
              >
                <a-select-option value="">交易金额</a-select-option>
                <a-select-option value="amount">交易金额</a-select-option>
                <a-select-option value="amount1">交易金额1</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="10">
            <a-form-item label="调整计费量"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            >
			<a-input-number :min="1" :max="10"  @change="onChange" 
				v-decorator="[
	              'leader',
	              {rules: [{ required: true, message: '请输入计费量' }]}
	            ]"
			/>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24" >
          <a-col :span="10" offset="2" style="width:780px;margin-left:-76px;">
            <a-form-item label="原因说明"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            >
              <a-textarea placeholder="请输入至少五个字符" :rows="4" cols="70"/>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="10" offset="2">
            <a-form-item label="附件上传"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="20"
            >
			  <a-upload name="file" :multiple="true" action="https://www.mocky.io/v2/5cc8019d300000980a055e76" :headers="headers" @change="handleChange"
			  	v-decorator="[
	              'leader',
	              {rules: [{ required: true, message: '请上传' }]}
	            ]"
			  >
			    <a-button>
			      <a-icon type="upload" /> 上传文件
			    </a-button><br>
			    <span style="font-size:14px;color:#ccc;margin-top: 10px;display: inline-block;">支持扩展名：.doc .docx .pdf .jpg...</span>
			  </a-upload>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-modal>
  </div>
</template>

<script>

export default {
  name: 'InputModal',
  components: {

  },
  data () {
    return {
      formLayout: 'horizontal',
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
      form: this.$form.createForm(this),
      width: '800px',
      visible1: false,
      visible2: false,
      visible3: false
    }
  },
  computed: {
  	formItemLayout () {
      const { formLayout } = this;
      return formLayout === 'horizontal' ? {
        labelCol: { span: 8 },
        wrapperCol: { span: 14 },
      } : {};
    },
    buttonItemLayout () {
      const { formLayout } = this;
      return formLayout === 'horizontal' ? {
        wrapperCol: { span: 14, offset: 4 },
      } : {};
    }
  },
  methods: {
    handleChange (value) {
      console.log(`selected ${value}`)
    },
    handleSubmit (e) {
      e.preventDefault()
      this.confirmLoading = true
      setTimeout(() => {
        this.form.validateFields((err, values) => {
          if (!err) {
            this.visible = false
          }
          this.confirmLoading = false
        })
      }, 2000)
    },
    handleSubmit1 (e) {
      e.preventDefault()
      this.confirmLoading = true
      setTimeout(() => {
        this.form.validateFields((err, values) => {
          if (!err) {
            this.visible1 = false
          }
          this.confirmLoading = false
        })
      }, 2000)
    },
    handleSelectChange (value) {
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`
      })
    },
    showModal () {
      this.visible = true
      this.width = '640px'
    },
    showModal_860 () {
      this.visible1 = true
    },
    showDocument () {
      this.visible2 = true
      this.width = '480px'
    },
    showRemarks(){
      this.visible3 = true
      this.width = '218px'
    },
    handleCancel (e) {
      console.log('Clicked cancel button')
      this.visible = false
    },
    handleCancel1 (e) {
      console.log('Clicked cancel button')
      this.visible1 = false
    },
    handleCancel2(e){
    	this.visible2 = false
    },
    handleCancel3(e){
    	this.visible3 = false
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .space-bottom_24 {
    margin-bottom: 24px;
  }
}
//  /deep/.ant-advanced-search-form {
//     padding: 24px;
//     background: #fbfbfb;
//     border: 1px solid #d9d9d9;
//     border-radius: 6px;
//     margin: 0 60px;
//   }

//   /deep/ .ant-advanced-search-form .ant-form-item {
//     display: flex;
//   }

//   /deep/ .ant-advanced-search-form .ant-form-item-control-wrapper {
//     flex: 1;
//   }
</style>
