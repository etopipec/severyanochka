import { mount } from "@vue/test-utils";
import { expect, it, describe } from "vitest";
import { Button } from './index';

describe("Button", () => {
  it('Render text', async () => {
    const wrapper = mount(Button, {
      props: {
        color: 'primary',
        decoration: 'default',
        size: 'L',
        disabled: false,
      },
      slots: {
        default: 'Button Text',
      }
    });
  
    expect(wrapper.find('.button__text').text()).toBe('Button Text');
  });
  
  it('Emit click', async () => {
    const click = () => console.log('isClicked');

    const wrapper = mount(Button, {
      props: {
        color: 'primary',
        decoration: 'default',
        size: 'L',
        disabled: false,
        click,
      },
      slots: {
        default: 'Button Text',
      }
    });

    await wrapper.find('.button').trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
  });
});
