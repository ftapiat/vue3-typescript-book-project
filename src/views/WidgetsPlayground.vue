<template>
  <div class="p-4">
    <div class="max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
      <div class="grid grid-cols-1 justify-items-start">
        <ElButton
            :disabled="false"
            label="Add Customers Widget to 1"
            @clicked="addWidget($refs.container1, 'customers', 0)"
        />
        <ElButton
            :disabled="false"
            label="Add Orders Widget to 1"
            add-css="mt-1"
            @clicked="addWidget($refs.container1, 'orders', 0)"
        />
        <ElButton
            :disabled="false"
            label="Add ListItems Widget to 1"
            add-css="mt-1"
            @clicked="addWidget($refs.container1, 'items', 0)"
        />
      </div>
      <div class="grid grid-cols-1 justify-items-end">
        <ElButton
            :disabled="false"
            label="Add Customers Widget to 2"
            @clicked="addWidget($refs.container2, 'customers', 0)"
        />
        <ElButton
            :disabled="false"
            label="Add Orders Widget to 2"
            add-css="mt-1"
            @clicked="addWidget($refs.container2, 'orders', 0)"
        />
        <ElButton
            :disabled="false"
            label="Add ListItems Widget to 2"
            add-css="mt-1"
            @clicked="addWidget($refs.container2, 'items', 0)"
        />
      </div>
    </div>
    <div class="mt-3 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
      <WidgetsContainerComponent
          :container-id="1"
          ref="container1"
          name="cont-1"
          title="Container 1"
          add-css="border p-3 bg-yellow-100"
      />
      <WidgetsContainerComponent
          :container-id="2"
          ref="container2"
          name="cont-2"
          title="Container 2"
          add-css="border p-3 bg-green-100"
      />
    </div>
  </div>
</template>

<script lang="ts">
import ElText from "@/components/primitives/text/ElText.vue";
import ElButton from "@/components/primitives/buttons/ElButton.vue";
import WidgetsContainerComponent from "@/components/widgets-container/WidgetsContainer.component.vue";
import {defineComponent, ref, markRaw} from "vue";
import {WidgetsCatalog} from "@/components/sample-widgets/WidgetsCatalog";
import {WidgetInfoInterface} from "@/components/widgets-container/models";

export default defineComponent({
  name: "WidgetsPlayground",
  components: {ElText, ElButton, WidgetsContainerComponent},
  setup() {
    const addWidget = (container: any, componentKey: string, positionType: number) => {
      const component = WidgetsCatalog.get(componentKey);
      const containerId: number = Number(container.containerId);

      const widgetInfo: WidgetInfoInterface = {
        id: -1,
        containerId: containerId,
        position: -1,
        component: markRaw(component),
        props: {
          id: -1,
          containerId: containerId,
          name: 'test',
          collapsed: false,
          toggling: false,
        },
      };

      container.addWidget(widgetInfo);
    }

    const container1 = ref(HTMLElement);
    const container2 = ref(HTMLElement);

    return {
      addWidget,
      container1,
      container2,
    };
  },
});
</script>
