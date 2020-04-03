import { expect } from 'chai';

class Notification {
  successIsDisplayed() {
    expect($('.notification-success').isDisplayed()).true;
  }

  failIsDisplayed() {
    expect($('.notification-error').isDisplayed()).true;
  }

// no longer to be used, instead use successIsDisplayed()
  get success() {
    return $('//div[@class="notification notification-success notification-visible"]');
  }

// no longer to be used, instead use failIsDisplayed()
  get fail() {
    return $('//div[@class="notification notification-error notification-visible"]');
  }

  get title() {
    return $('//h4[@class="notification-title"]');
  }

  get invalidMsg() {
    return $('//div[contains(@class, "form")]//div[contains(text(), "Invalid")]');
  }
}

export default new Notification();
