const { Schema, model } = require('mongoose')

const PoliticanSchema = new Schema({
    name: { type: String, required: true },
    political_party: { type: String, required: true },
    political_hierarchy: { type: String, required: true },
    projects: [{ type: String }],
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 }
}, { timestamps: true })

module.exports = model('Politican', PoliticanSchema)
