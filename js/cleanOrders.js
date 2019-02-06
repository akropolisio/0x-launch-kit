'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const db_connection_1 = require('./db_connection');
const SignedOrderModel_1 = require('./models/SignedOrderModel');
const utils_1 = require('./utils');
(async () => {
    await db_connection_1.initDBConnectionAsync();
    const connection = db_connection_1.getDBConnection();
    try {
        await connection.manager.clear(SignedOrderModel_1.SignedOrderModel);
        utils_1.utils.log('Orders successfully cleaned');
    } catch (error) {
        utils_1.utils.log('Clean failed', error);
    } finally {
        connection.close();
    }
})();
