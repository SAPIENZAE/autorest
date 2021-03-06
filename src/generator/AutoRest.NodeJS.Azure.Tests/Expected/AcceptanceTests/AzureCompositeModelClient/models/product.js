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
 * Initializes a new instance of the Product class.
 * @constructor
 * The product documentation.
 *
 * @member {string} [productId] Unique identifier representing a specific
 * product for a given latitude & longitude. For example, uberX in San
 * Francisco will have a different product_id than uberX in Los Angeles.
 * 
 * @member {string} [description] Description of product.
 * 
 * @member {string} [displayName] Display name of product.
 * 
 * @member {string} [capacity] Capacity of product. For example, 4 people.
 * Default value: '100' .
 * 
 * @member {string} [image] Image URL representing the product.
 * 
 */
function Product() {
}

/**
 * Defines the metadata of Product
 *
 * @returns {object} metadata of Product
 *
 */
Product.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'Product',
    type: {
      name: 'Composite',
      className: 'Product',
      modelProperties: {
        productId: {
          required: false,
          serializedName: 'product_id',
          type: {
            name: 'String'
          }
        },
        description: {
          required: false,
          serializedName: 'description',
          type: {
            name: 'String'
          }
        },
        displayName: {
          required: false,
          serializedName: 'display_name',
          type: {
            name: 'String'
          }
        },
        capacity: {
          required: false,
          serializedName: 'capacity',
          defaultValue: '100',
          type: {
            name: 'String'
          }
        },
        image: {
          required: false,
          serializedName: 'image',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = Product;
