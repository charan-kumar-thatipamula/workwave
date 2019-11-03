function tryCreatingSalesOrder() {
    try {
        var record = nlapiCreateRecord('salesorder');
        record.setFieldValue( 'entity', 52550);
        record.setFieldValue( 'customform', 139);
        record.setFieldValue( 'custbody_end_user', 52550);
        record.setFieldValue( 'custbody_order_type', 1);
        record.setFieldValue( 'custbody_renewal_terms', '12');
        record.setFieldValue( 'salesrep', 19899);
        record.setFieldValue( 'custbody_celigo_sfnc_salesforce_id', '0062i000002CuN3AAK');
      	record.setFieldValue( 'subsidiary', 3);

        record.setFieldValue( 'custbody_swe_contract_start_date', '11/1/2019');
        record.setFieldValue( 'enddate', '11/1/2019');
        record.setFieldValue( 'custbody_gvo_renewalsourcescheduleform', 1);
        record.setFieldValue( 'startdate', '11/1/2019');

        record.setLineItemValue('item', 'price', 1, -1)
        record.setLineItemValue('item', 'revrecstartdate', 1, '11/1/2019')
        record.setLineItemValue('item', 'rate', 1, 4.99)
        record.setLineItemValue('item', 'custcol_marathon_so_edf_2', 1, 19899)
        record.setLineItemValue('item', 'recurring_billing_frequency', 1, 'Monthly')
        record.setLineItemValue('item', 'item', 1, 4288)

        record.setLineItemValue('item', 'item', 2, 4297)
        record.setLineItemValue('item', 'price', 2, -1)
        record.setLineItemValue('item', 'revrecstartdate', 1, '11/1/2019')
        record.setLineItemValue('item', 'rate', 2, 19.99)
        record.setLineItemValue('item', 'custcol_marathon_so_edf_2', 1, 19899)
        record.setLineItemValue('item', 'recurring_billing_frequency', 2, 'Monthly')
        
        nlapiLogExecution('DEBUG', 'saving record', '')
        var recordId = nlapiSubmitRecord(record)
        nlapiLogExecution('DEBUG', 'saved order record', 'order id: ' + recordId)
    } catch (e) {
        nlapiLogExecution('DEBUG','error saving record: ' + e.message);
    }
    
}