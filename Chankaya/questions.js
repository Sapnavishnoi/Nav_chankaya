'use strict';

const Joi = require('joi');
const { Model } = require('./helpers');

module.exports = class Question extends Model {

   

   static get joiSchema() {

        return Joi.object({
            id: Joi.number().integer().greater(0),
            optionId: Joi.number().integer().greater(0).required(),
            question : Joi.string(),
            correct_answer: Joi.string().required(),
            category: Joi.string().required()
        });
    }


  static get relationMappings() {
    
    const User = require('./options');


        return {
            option: {
                relation: Model.BelongsToOneRelation,
                modelClass: Options,
                join: {
                    from: 'Question.id',
                    to: 'options.optionId'
                }
            }
        };
    }
}
