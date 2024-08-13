const express = require('express');
const app = express();
const PORT = 5000;
const fs = require("fs")
// Sample blood groups data
const bloodGroups = [
    { id: 1, group: 'A+' },
    { id: 2, group: 'A-' },
    { id: 3, group: 'B+' },
    { id: 4, group: 'B-' },
    { id: 5, group: 'AB+' },
    { id: 6, group: 'AB-' },
    { id: 7, group: 'O+' },
    { id: 8, group: 'O-' },
];

// Endpoint to get blood groups
const getBloodGroups = async(req, res) => {
    res.json(bloodGroups);
};

const checkCompatibility = async (req, res) => {
    const { userBloodGroup, partnerBloodGroup } = req.body;

    if (!userBloodGroup || !partnerBloodGroup) {
        return res.status(400).json({ error: 'Both blood groups must be selected.' });
    }

    // Compatibility information
    const compatibilityInfo = {
        'A+': {
            canDonateTo: ['A+', 'AB+'],
            canReceiveFrom: ['A+', 'A-', 'O+', 'O-'],
            diseases: 'Prone to heart disease, cancer; avoid risk factors.',
        },
        'A-': {
            canDonateTo: ['A+', 'A-', 'AB+', 'AB-'],
            canReceiveFrom: ['A-', 'O-'],
            diseases: 'Prone to heart disease, cancer; avoid risk factors.',
        },
        'B+': {
            canDonateTo: ['B+', 'AB+'],
            canReceiveFrom: ['B+', 'B-', 'O+', 'O-'],
            diseases: 'Prone to diabetes, heart disease; avoid risk factors.',
        },
        'B-': {
            canDonateTo: ['B+', 'B-', 'AB+', 'AB-'],
            canReceiveFrom: ['B-', 'O-'],
            diseases: 'Prone to diabetes, heart disease; avoid risk factors.',
        },
        'AB+': {
            canDonateTo: ['AB+'],
            canReceiveFrom: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
            diseases: 'Prone to non-specific diseases; maintain a healthy lifestyle.',
        },
        'AB-': {
            canDonateTo: ['AB+', 'AB-'],
            canReceiveFrom: ['A-', 'B-', 'AB-', 'O-'],
            diseases: 'Prone to non-specific diseases; maintain a healthy lifestyle.',
        },
        'O+': {
            canDonateTo: ['A+', 'B+', 'AB+', 'O+'],
            canReceiveFrom: ['O+', 'O-'],
            diseases: 'Prone to ulcers, gastric cancer; avoid risk factors.',
        },
        'O-': {
            canDonateTo: ['A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-'],
            canReceiveFrom: ['O-'],
            diseases: 'Prone to ulcers, gastric cancer; avoid risk factors.',
        },
    };

    const userInfo = compatibilityInfo[userBloodGroup];
    const partnerInfo = compatibilityInfo[partnerBloodGroup];

    if (!userInfo || !partnerInfo) {
        return res.status(400).json({ error: 'Invalid blood group selected.' });
    }

    // Determine compatibility
    const canUserDonateToPartner = userInfo.canDonateTo.includes(partnerBloodGroup);
    const canPartnerDonateToUser = partnerInfo.canDonateTo.includes(userBloodGroup);

    res.json({
        user: {
            canDonateTo: userInfo.canDonateTo,
            canReceiveFrom: userInfo.canReceiveFrom,
            diseases: userInfo.diseases,
        },
        partner: {
            canDonateTo: partnerInfo.canDonateTo,
            canReceiveFrom: partnerInfo.canReceiveFrom,
            diseases: partnerInfo.diseases,
        },
        compatibility: {
            canUserDonateToPartner,
            canPartnerDonateToUser,
        },
    });
};


module.exports = { getBloodGroups, checkCompatibility }