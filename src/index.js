/**
 * AlertCursiveAchievement block for the Editor.js.
 *
 * @author Vishal Telangre
 * @license MIT
 */

/**
 * Build styles
 */
require('./index.css').toString();

/**
 * Import Tool's icon
 */
import ToolboxIcon from '../assets/icon.svg';

/**
 * @class AlertCursiveAchievement
 * @classdesc AlertCursiveAchievement Tool for Editor.js
 * @property {AlertCursiveAchievementData} data - AlertCursiveAchievement Tool`s input and output data
 * @property {object} api - Editor.js API instance
 *
 * @typedef {object} AlertCursiveAchievementData
 * @description AlertCursiveAchievement Tool`s input and output data
 * @property {string} type - AlertCursiveAchievement type
 * @property {string} message - AlertCursiveAchievement message
 *
 * @typedef {object} AlertCursiveAchievementConfig
 * @description AlertCursiveAchievement Tool`s initial configuration
 * @property {string} defaultType - default AlertCursiveAchievement type
 * @property {string} messagePlaceholder - placeholder to show in AlertCursiveAchievement`s message input
 */
export default class AlertCursiveAchievement {
  /**
   * Get Toolbox settings
   *
   * @public
   * @returns {string}
   */
  static get toolbox() {
    return {
      icon: ToolboxIcon,
      title: 'AlertCursiveAchievement',
    };
  }

  /**
   * Allow to press Enter inside the AlertCursiveAchievement block
   * @public
   * @returns {boolean}
   */
  static get enableLineBreaks() {
    return true;
  }

  /**
   * Default AlertCursiveAchievement type
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_TYPE() {
    return 'wolf';
  }

  /**
   * Default placeholder for AlertCursiveAchievement message
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_MESSAGE_PLACEHOLDER() {
    return 'Type here...';
  }

  /**
   * Supported AlertCursiveAchievement types
   *
   * @public
   * @returns {array}
   */
  static get ALERT_TYPES() {
    return ['cat', 'chil', 'egg', 'fish', 'go', 'izi', 'wolf'];
  }

  /**
   * AlertCursiveAchievement Tool`s styles
   *
   * @returns {Object}
   */
  get CSS() {
    return {
      settingsButton: this.api.styles.settingsButton,
      settingsButtonActive: this.api.styles.settingsButtonActive,
      wrapper: 'cdx-alert-coursive-achievement',
      wrapperForType: (type) => `cdx-alert-coursive-achievement-${type}`,
      message: 'cdx-alert__message',
    };
  }

  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {AlertCursiveAchievementData} data — previously saved data
   * @param {AlertCursiveAchievementConfig} config — user config for Tool
   * @param {Object} api - Editor.js API
   * @param {boolean} readOnly - read only mode flag
   */
  constructor({ data, config, api, readOnly }) {
    this.api = api;

    this.defaultType =
      config.defaultType || AlertCursiveAchievement.DEFAULT_TYPE;
    this.messagePlaceholder =
      config.messagePlaceholder ||
      AlertCursiveAchievement.DEFAULT_MESSAGE_PLACEHOLDER;

    this.data = {
      type: AlertCursiveAchievement.ALERT_TYPES.includes(data.type)
        ? data.type
        : this.defaultType,
      message: data.message || '',
    };

    this.container = undefined;

    this.readOnly = readOnly;
  }

  /**
   * Returns true to notify the core that read-only mode is supported
   *
   * @return {boolean}
   */
  static get isReadOnlySupported() {
    return true;
  }

  /**
   * Create AlertCursiveAchievement Tool container
   *
   * @returns {Element}
   */
  render() {
    const containerClasses = [
      this.CSS.wrapper,
      this.CSS.wrapperForType(this.data.type),
    ];

    this.container = this._make('div', containerClasses);

    const messageEl = this._make('div', [this.CSS.message], {
      contentEditable: !this.readOnly,
      innerHTML: this.data.message,
    });

    messageEl.dataset.placeholder = this.messagePlaceholder;

    this.container.appendChild(messageEl);

    return this.container;
  }

  /**
   * Create Block's settings block
   *
   * @returns {HTMLElement}
   */
  renderSettings() {
    const settingsContainer = this._make('div');

    AlertCursiveAchievement.ALERT_TYPES.forEach((type) => {
      const settingsButton = this._make(
        'div',
        [
          this.CSS.settingsButton,
          this.CSS.wrapper,
          this.CSS.wrapperForType(type),
        ],
        {
          innerHTML: 'A',
        }
      );

      if (this.data.type === type) {
        // Highlight current type button
        settingsButton.classList.add(this.CSS.settingsButtonActive);
      }

      // Set up click handler
      settingsButton.addEventListener('click', () => {
        this._changeAlertCursiveAchievementType(type);

        // Un-highlight previous type button
        settingsContainer
          .querySelectorAll(`.${this.CSS.settingsButton}`)
          .forEach((button) =>
            button.classList.remove(this.CSS.settingsButtonActive)
          );

        // and highlight the clicked type button
        settingsButton.classList.add(this.CSS.settingsButtonActive);
      });

      settingsContainer.appendChild(settingsButton);
    });

    return settingsContainer;
  }

  /**
   * Helper for changing style of AlertCursiveAchievement block with the selected AlertCursiveAchievement type
   *
   * @param {string} newType - new AlertCursiveAchievement type to be applied to the block
   * @private
   */
  _changeAlertCursiveAchievementType(newType) {
    // Save new type
    this.data.type = newType;

    AlertCursiveAchievement.ALERT_TYPES.forEach((type) => {
      const alertClass = this.CSS.wrapperForType(type);

      // Remove the old AlertCursiveAchievement type class
      this.container.classList.remove(alertClass);

      if (newType === type) {
        // Add an AlertCursiveAchievement class for the selected AlertCursiveAchievement type
        this.container.classList.add(alertClass);
      }
    });
  }

  /**
   * Extract AlertCursiveAchievement data from AlertCursiveAchievement Tool element
   *
   * @param {HTMLDivElement} alertElement - element to save
   * @returns {AlertCursiveAchievementData}
   */
  save(alertElement) {
    const messageEl = alertElement.querySelector(`.${this.CSS.message}`);

    return { ...this.data, message: messageEl.innerHTML };
  }

  /**
   * Helper for making Elements with attributes
   *
   * @param  {string} tagName           - new Element tag name
   * @param  {array|string} classNames  - list or name of CSS classname(s)
   * @param  {Object} attributes        - any attributes
   * @returns {Element}
   * @private
   */
  _make(tagName, classNames = null, attributes = {}) {
    let el = document.createElement(tagName);

    if (Array.isArray(classNames)) {
      el.classList.add(...classNames);
    } else if (classNames) {
      el.classList.add(classNames);
    }

    for (let attrName in attributes) {
      el[attrName] = attributes[attrName];
    }

    return el;
  }

  /**
   * Fill AlertCursiveAchievement's message with the pasted content
   *
   * @param {PasteEvent} event - event with pasted content
   */
  onPaste(event) {
    const { data } = event.detail;

    this.data = {
      type: this.defaultType,
      message: data.innerHTML || '',
    };
  }

  /**
   * Allow AlertCursiveAchievement to be converted to/from other blocks
   */
  static get conversionConfig() {
    return {
      // export AlertCursiveAchievement's message for other blocks
      export: (data) => data.message,
      // fill AlertCursiveAchievement's message from other block's export string
      import: (string) => {
        return {
          message: string,
          type: this.DEFAULT_TYPE,
        };
      },
    };
  }

  /**
   * Sanitizer config for AlertCursiveAchievement Tool saved data
   * @returns {Object}
   */
  static get sanitize() {
    return {
      type: false,
      message: true,
    };
  }
}
