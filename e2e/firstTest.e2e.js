describe('App', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should always show an image on onboarding screen', async () => {
    await expect(element(by.id('onboardingImage'))).toBeVisible();
  });
});
