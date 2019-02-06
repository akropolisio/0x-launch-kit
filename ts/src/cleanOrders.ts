import { getDBConnection, initDBConnectionAsync } from './db_connection';
import { SignedOrderModel } from './models/SignedOrderModel';
import { utils } from './utils';

(async () => {
    await initDBConnectionAsync();
    const connection = getDBConnection();
    try {
        await connection.manager.clear(SignedOrderModel);
        utils.log('Orders successfully cleaned');
    } catch (error) {
        utils.log('Clean failed', error);
    } finally {
        connection.close();
    }
})();
