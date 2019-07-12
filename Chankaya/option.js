'use strict';

const Joi = require('joi');
const { Model } = require('./helpers');

module.exports = class Options extends Model {

    static get tableName() {

        return 'options';
    }

    static get joiSchema() {

        return Joi.object({
            id: Joi.number().integer().greater(0),
            questionId: Joi.number().integer().greater(0)
        });
    }
};
