import { mount } from "@vue/test-utils";
import HelloWorld from "../src/components/HelloWorld.vue";


describe("Hello World Component Snapshot", () => {
  const msg = "Hello Jest";
  const wrapper = mount(HelloWorld, {
    props: {
      msg,
    },
  });

  it("should match snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should match inline snapshot", () => {
    expect(wrapper.find('h1').text()).toMatchInlineSnapshot('"Hello Jest"');
  });
});
