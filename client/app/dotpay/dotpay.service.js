'use strict';

angular.module('rentAcarApp')
	.service('dotpay', function () {
		// AngularJS will instantiate a singleton by calling "new" on this function
		var STATUS_OK = 'OK';
		var STATUS_FAIL = 'FAIL';
		var OPERATION_STATUS_COMPLETED = 'completed';
		var data;

		this.createPayment = function(){

		};

		this.validateSignature = function() {
			var array = [
				'FswhytbpvDXwWC7qKYIfHb4PL8UT3pW1',
				this.paramValue('id'),
				this.paramValue('operation_number'),
				this.paramValue('operation_type'),
				this.paramValue('operation_status'),
				this.paramValue('operation_amount'),
				this.paramValue('operation_currency'),
				this.paramValue('operation_original_amount'),
				this.paramValue('operation_original_currency'),
				this.paramValue('operation_datetime'),
				this.paramValue('control'),
				this.paramValue('description'),
				this.paramValue('p_info'),
				this.paramValue('p_email'),
				this.paramValue('channel')
			];

			var string = array.join();

			if(this.paramValue('operation_status') !== this.OPERATION_STATUS_COMPLETED) {
				return this.STATUS_FAIL;
			}
			if(sha256(string) !== this.paramValue('signature')) {
				return this.STATUS_FAIL;
			}
			return this.STATUS_OK;
		}

		this.isSuccessful = function(){
			if(this.validateSignature() === 'STATUS_OK'){
				return true;
			} else {
				return false;
			}
		}

		this.paramValue = function(key) {
			if(typeof(this.data[key]) !== null) {
				return this.data[key];
			} else {
				return '';
			}
		}
	});
