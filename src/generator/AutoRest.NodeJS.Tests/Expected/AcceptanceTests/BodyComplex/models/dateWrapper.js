/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the DateWrapper class.
 * @constructor
 * @member {date} [field]
 * 
 * @member {date} [leap]
 * 
 */
function DateWrapper() {
}

/**
 * Defines the metadata of DateWrapper
 *
 * @returns {object} metadata of DateWrapper
 *
 */
DateWrapper.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'date-wrapper',
    type: {
      name: 'Composite',
      className: 'DateWrapper',
      modelProperties: {
        field: {
          required: false,
          serializedName: 'field',
          type: {
            name: 'Date'
          }
        },
        leap: {
          required: false,
          serializedName: 'leap',
          type: {
            name: 'Date'
          }
        }
      }
    }
  };
};

module.exports = DateWrapper;
