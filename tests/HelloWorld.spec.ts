import { mount } from "@vue/test-utils";
import HelloWorld from "../src/components/HelloWorld.vue";


describe("Hello World Component", () => {
  const msg = "Hello Jest";
  const wrapper = mount(HelloWorld, {
    props: {
      msg,
    },
  });

  it("should have message same as msg props", () => {
    expect(wrapper.find("h1").text()).toBe(msg);
  });

  it("should have button", () => {
    expect(wrapper.find("button").text()).toBe("count is 0");
  });

  it("should be increment counter if the button clicked", async () => {
    await wrapper.find("button").trigger("click");

    // wait until dom changed
    await wrapper.vm.$nextTick();

    expect(wrapper.find("button").text()).toBe("count is 1");
  });
});
