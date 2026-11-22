import test from 'node:test';
import assert from 'node:assert/strict';
import { checkCapacity, checkEligibility, calculatePayment, validateBooking } from '../src/rules.js';

test('capacity accepts an ordinary group size',()=>{assert.deepEqual(checkCapacity(3,6),{ok:true,message:''});});
test('capacity accepts exactly six travellers',()=>{assert.deepEqual(checkCapacity(6,6),{ok:true,message:''});});
test('capacity rejects a group above six',()=>{assert.equal(checkCapacity(7,8).ok,false);});
test('capacity also respects lower route availability',()=>{assert.match(checkCapacity(4,3).message,/Only 3 places remain/);});
test('challenging route requires fitness acknowledgement',()=>{assert.equal(checkEligibility({difficulty:'Challenging'},false).ok,false);});
test('deposit is calculated at thirty percent',()=>{assert.deepEqual(calculatePayment(10000),{total:10000,deposit:3000,balance:7000});});
test('booking validation identifies invalid email and missing date',()=>{const errors=validateBooking({name:'Sara',email:'bad',departure:'',fitnessConfirmed:true},{difficulty:'Easy',capacity:6},2);assert.ok(errors.email);assert.ok(errors.departure);});
