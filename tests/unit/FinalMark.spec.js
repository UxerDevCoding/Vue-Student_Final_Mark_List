import { shallowMount } from "@vue/test-utils";
import FinalMark from "@/components/FinalMark.vue";

describe("FinalMark", () => {
  it("Rendering component", () => {
    const wrapper = shallowMount(FinalMark);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.attributes("class")).toBe("container");
  });

  it("Class div container exist", () => {
    const wrapper = shallowMount(FinalMark);
    expect(wrapper.attributes("class")).toBe("container");
  });

  it("Text doesn't repeat", () => {
    const wrapper = shallowMount(FinalMark);
    expect(wrapper.text()).toMatch("Add Mark");
  });

  it("Input Exist and is rendering", () => {
    const wrapper = shallowMount(FinalMark);
    const input = wrapper.get("input");
    expect(input.attributes("id")).toBe("name");
  });

  it("Student name show in table", async () => {
    const wrapper = shallowMount(FinalMark);
    await wrapper.find("input").setValue("Omar");
    const table = wrapper.get("table");
    expect(table.html()).toContain("Omar");
  });
});
