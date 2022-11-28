/**
 * tenant.js
 */
"use strict";

function Tenant(buildingName, floorNo, apartmentNo, primaryTenantFullNames, phoneNo, email) {
    this.buildingName = buildingName;
    this.floorNo = floorNo;
    this.apartmentNo = apartmentNo;
    this.primaryTenantFullNames = primaryTenantFullNames;
    this.phoneNo = phoneNo;
    this.email = email;
}

module.exports = Tenant;