/// <reference types="@welldone-software/why-did-you-render" />
import React from 'react';

/**
 * Flag to enable or disable the "Why Did You Render" feature.
 * Works only in development(debug builds).
 */
const enableWhyDidYouRender = false;

if (__DEV__ && enableWhyDidYouRender) {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {});
}
