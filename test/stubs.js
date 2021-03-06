/*!
 * @dispatchlabs/dispatch-js <https://github.com/dispatchlabs/disnode_sdk>
 *
 * Copyright © 2018, [Dispatch Labs](http://dispatchlabs.io).
 * Released under the LGPL v3 License.
 */

'use strict'

module.exports = (Dispatch) => {
  const stubData = {
    Account: {
      empty: {
        name: undefined,
        address: undefined,
        privateKey: undefined,
        publicKey: undefined,
        transaction: undefined,
        balance: "0",
        availableHertz: "0",
        created: undefined,
        updated: undefined
      },
      A1: {
        name: undefined,
        address: 'fa61c18114f8ff8aafbeb5d32e1b108e3f6cf30d',
        privateKey: '472ba91402425b58a2eebf932812f20c6d7f6297bba1f83d9a58116ae6512d9e',
        publicKey: '04775936b80a436491a386fbdbea04603b12689e3e2600085ecf956dc4dd1bed45240eb7fcabfebc98f24d28c5862d3e8a9d9a4b26265f35b727b98db24d9f0566',
        transaction: undefined,
        balance: "5",
        availableHertz: "5",
        created: undefined,
        updated: undefined
      },
      A1_str: '{"address":"fa61c18114f8ff8aafbeb5d32e1b108e3f6cf30d","privateKey":"472ba91402425b58a2eebf932812f20c6d7f6297bba1f83d9a58116ae6512d9e","publicKey":"04775936b80a436491a386fbdbea04603b12689e3e2600085ecf956dc4dd1bed45240eb7fcabfebc98f24d28c5862d3e8a9d9a4b26265f35b727b98db24d9f0566","balance":"5","availableHertz":"5"}',
      A2: 'fa61c18114f8ff8aafbeb5d32e1b108e3f6cf30b'
    },
    Transaction: {
      T1: {
        hash: '1d6aca3a91c9ad81f36d0e52e47992257ba4c5309916ca370a2a37e9abad2e1f',
        type: 0,
        from: 'fa61c18114f8ff8aafbeb5d32e1b108e3f6cf30d',
        to: 'fa61c18114f8ff8aafbeb5d32e1b108e3f6cf30b',
        value: '5',
        time: 1532595045435,
        code: 'a',
        abi: '[]',
        method: 'foo',
        params: '[]',
        gossip: [],
        signature: 'c8a907d1869daee2e49d92024319a3f8a75d77e7c22e15cd3f5553ac1f05a1d71a801f89a6ae4d050dfee60b830725b5d6ac9e7f97aefe81e3339971616e4ff200',
        hertz: '0',
        fromName: undefined,
        toName: undefined,
        address: '03e08bb6f3f25c3374487c4f5c026bd1e0fa4f5a39ef89e52f5ec1cb93a5c59744'
      },
      T1_str: '{"hash":"1d6aca3a91c9ad81f36d0e52e47992257ba4c5309916ca370a2a37e9abad2e1f","type":0,"from":"fa61c18114f8ff8aafbeb5d32e1b108e3f6cf30d","to":"fa61c18114f8ff8aafbeb5d32e1b108e3f6cf30b","value":"5","code":"a","abi":"[]","method":"foo","params":"[]","time":1532595045435,"signature":"c8a907d1869daee2e49d92024319a3f8a75d77e7c22e15cd3f5553ac1f05a1d71a801f89a6ae4d050dfee60b830725b5d6ac9e7f97aefe81e3339971616e4ff200","hertz":"0","address":"03e08bb6f3f25c3374487c4f5c026bd1e0fa4f5a39ef89e52f5ec1cb93a5c59744","gossip":[]}',
      type0: {
        from: 'fa61c18114f8ff8aafbeb5d32e1b108e3f6cf30d',
        to: 'fa61c18114f8ff8aafbeb5d32e1b108e3f6cf30b',
        value: 5,
        time: 1532595045435
      },
      type0Hash: 'fb638e6711fbc394a4edddabcb2515dd6a464ffc910d0232f6c3b252a2de6c5c',
      type1: {
        type: 1,
        from: 'fa61c18114f8ff8aafbeb5d32e1b108e3f6cf30d',
        value: 5,
        time: 1532595045435,
        code: '6080604052348015600f57600080fd5b5060858061001e6000396000f300608060405260043610603e5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663e2179b8e81146043575b600080fd5b348015604e57600080fd5b5060556057565b005b5600a165627a7a72305820aee1d9928562f46bc9cc3a8951bb2655ba01f6682a0b09d556774a7992a4c5470029',
        abi: [
            {
              constant: false,
              inputs: [],
              name: 'g',
              outputs: [],
              payable: false,
              stateMutability: 'nonpayable',
              type: 'function'
            }
          ],
        receipt: {
            transactionHash: '8cb4e2869137362803173c974e9ebb9b409be88d49178ab885ffbf34df699133',
            status: 'Ok',
            created: '2018-07-27T18:14:40.809768288Z',
            contractAddress: 'fa61c18114f8ff8aafbeb5d32e1b108e3f6cf30c'
          }
      },
      type1Hash: '6121126b0039d6f1e970414984f8f66e91a792d089f61942a6ac6c3361516465',
      type2: {
        type: 2,
        from: 'fa61c18114f8ff8aafbeb5d32e1b108e3f6cf30d',
        to: 'fa61c18114f8ff8aafbeb5d32e1b108e3f6cf30b',
        time: 1532595045435,
        method: 'g',
        abi: []
      },
      type2Hash: '61d7426e58542ae216eb8ce50b99270aeaad39cfe721ec8bcb325618613f56ab'
    },
    Contract: {
      C1: {
        source: 'pragma solidity ^0.4.24; contract x { function g() { } }',
        name: 'x',
        bytecode: '6080604052348015600f57600080fd5b5060858061001e6000396000f300608060405260043610603e5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663e2179b8e81146043575b600080fd5b348015604e57600080fd5b5060556057565b005b5600a165627a7a723058206b231aaad800171db67b40801bc5efc9022f2f3246cac8acea51d0113a3af9e00029',
        abi: [
            {
              constant: false,
              inputs: [],
              name: 'g',
              outputs: [],
              payable: false,
              stateMutability: 'nonpayable',
              type: 'function'
            }
          ],
        address: 'fa61c18114f8ff8aafbeb5d32e1b108e3f6cf30c'
      }
    },
    Network: {
      delegates: [
        {
          address: 'fa61c18114f8ff8aafbeb5d32e1b108e3f6cf30d',
          httpEndpoint: {
            host: '127.0.0.1',
            port: 1000
          },
          type: 'Delegate'
        },
        {
          address: 'fa61c18114f8ff8aafbeb5d32e1b108e3f6cf30d',
          httpEndpoint: {
            host: '127.0.0.1',
            port: 1001
          },
          type: 'Delegate'
        }
      ]
    }
  };

  // Network Stub for GET requests
  Dispatch.Network.prototype.GET = (options, callback) => {
    switch (options.path) {
    case '/v1/delegates':
      callback(null, {
        data: stubData.Network.delegates
      });
      break;
    case '/v1/accounts/fa61c18114f8ff8aafbeb5d32e1b108e3f6cf30d':
      callback(null, {
        status: 'Ok',
        data: {
          balance: 10,
          created: +(new Date('2018-07-21T06:14:31.300253473Z')),
          updated: +(new Date('2018-07-21T06:14:31.300253473Z'))
        }
      })
      break;
    case '/v1/transactions/6121126b0039d6f1e970414984f8f66e91a792d089f61942a6ac6c3361516465':
      callback(null, {
        status: 'Ok',
        humanReadableStatus: 'Ok',
        created: '2018-07-27T18:14:40.809768288Z',
        data: stubData.Transaction.type1
      });
      break;
    default:
      throw Error('Unknown path: "' + options.path + '"');
    }
  };

  // Network Stub for POST requests
  Dispatch.Network.prototype.POST = (options, data, callback) => {
    switch (options.path) {
    case '/v1/transactions':
      callback(null, {
        type: 'NewTransaction',
        status: 'Pending',
        created: '2018-07-27T18:14:40.809768288Z'
      });
      break;
    default:
      throw Error('Unknown path: "' + options.path + '"');
    }
  };

  return stubData;
};