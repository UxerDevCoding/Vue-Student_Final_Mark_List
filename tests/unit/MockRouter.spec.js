import { mount } from "@vue/test-utils";
import MockRouter from "../../src/components/MockRouter.vue";

describe("mocking router", () => {
  it("isCorrect", async () => {
    const mockRouter = {
      push: jest.fn(),
    };

    const wrapper = mount(MockRouter, {
      data() {
        return {
          isCorrect: false,
        };
      },
      global: {
        mocks: {
          $router: mockRouter,
        },
      },
    });

    await wrapper.find("btn_add_mark").trigger("click");
    expect(mockRouter.push).toHaveBeenCalledWith("/");
  });
});
