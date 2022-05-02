import React, { Component } from 'react';
import Web3 from 'web3'
import Navbarswitch from './components/navbar/Navbarswitch'

import './App.css';
import Navbar from './components/navbar/Navbar'
import Main from './components/main/Main'
import MainTest from './components/main/MainTest';

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    console.log(this.state.account)

// Contract.setProvider(new Web3.providers.HttpProvider('http://localhost:8545'));
var myContract =  new web3.eth.Contract( [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "EquipmentCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "EquipmentTransfered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "RequestCreated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "createProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_rcount",
				"type": "uint256"
			}
		],
		"name": "deleteRequest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_rcount",
				"type": "uint256"
			}
		],
		"name": "getProductTransaction",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "from",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "to",
						"type": "address"
					}
				],
				"internalType": "struct Marketplace.transaction",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getProductTransactionCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_rcount",
				"type": "uint256"
			}
		],
		"name": "getRequest",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "productID",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					}
				],
				"internalType": "struct Marketplace.Request",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRequestCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_rcount",
				"type": "uint256"
			}
		],
		"name": "getUserTransaction",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "from",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "to",
						"type": "address"
					}
				],
				"internalType": "struct Marketplace.transaction",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getUserTransactionCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "productCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "product_history",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "TransactionCount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "products",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_rcount",
				"type": "uint256"
			}
		],
		"name": "purchaseProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "requestProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "requests_wrapper",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "requestCount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "user_history",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "TransactionCount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
	 ,
    "0x28A66140867A27186986c93dAe54194Bd61A499e",
    { from : this.state.account,
    gas: 150000,
    gasPrice: '30000000000'}
);



  this.setState({myContract})
// myContract.methods.store("5").send().then(function (output) { console.log(output) });
   
      const productCount = await myContract.methods.productCount().call({ from: this.state.account })      
      this.setState({ productCount })
      console.log(productCount)


      //load request
      const requestCount = await myContract.methods.getRequestCount().call({ from: this.state.account })
      this.setState({ requestCount })
      console.log("requestCount: " + requestCount)
      for (var i = 1; i <= requestCount; i++) {
        const req = await myContract.methods.getRequest(i).call({ from: this.state.account })
        this.setState({
          request: [...this.state.request, req]
        })
      }


     
      console.log(this.state.request)
      // console.log(requestCount)


      // // Load products

      for (var i = 1; i <= productCount; i++) {
        const product = await myContract.methods.products(i).call({ from: this.state.account })
        this.setState({
          products: [...this.state.products, product]
        })
      }
      // const requesta = await marketplace.methods.getRequest().call({ from: this.state.account })
      // this.setState({request: requesta})
      // console.log(requesta.productID.toNumber()-1)
       console.log(this.state.products)
      this.setState({ loading: false})
  //   } else {
  //     window.alert('Marketplace contract not deployed to detected network.')
  //   }
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      productCount: 0,
      products: [],
      loading: true,
      requestCount:0,
      request:[],
     
    }

    this.createProduct = this.createProduct.bind(this)
    this.purchaseProduct = this.purchaseProduct.bind(this)
        this.requestProduct = this.requestProduct.bind(this)
        this.deleteRequest = this.deleteRequest.bind(this)


  }

  createProduct(name) {
    console.log(name)
    this.setState({ loading: true })
    this.state.myContract.methods.createProduct(name).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      console.log(receipt)


      this.setState({ loading: false })
    })
  }

  purchaseProduct(rid) {
    this.setState({ loading: true })
    console.log(rid);
    this.state.myContract.methods.purchaseProduct(rid).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      console.log(receipt)
      this.setState({ loading: false })
    })
  }
  deleteRequest(rid) {
    this.setState({ loading: true })
    console.log(rid);
    this.state.myContract.methods.deleteRequest(rid).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      console.log(receipt)
      this.setState({ loading: false })
    })
  }
  requestProduct(id) {
    this.setState({ loading: true })
    this.state.myContract.methods.requestProduct(id).send({ from: this.state.account })
    .then('receipt', (receipt) => {
            if(receipt.code===4001){
              console.log("transaction declined!");
              this.setState({ loading: false })
            }
            else{
              console.log("transaction done!")
              this.setState({ loading: false });
            }

     
    })
  }


  

  render() {


    return (
      <div>
        <Navbar account={this.state.account} />
        
        <div className="container-fluid">
          <div className="row">
            <main >
              { this.state.loading
                ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                : <Main
                contract={this.state.myContract}
                deleteRequest={this.deleteRequest}
                createProduct={this.createProduct}
                products={this.state.products}
                requestProduct={this.requestProduct}
                requestCount={this.state.requestCount}
                request={this.state.request}
                purchaseProduct={this.purchaseProduct}
              

                  />

              }
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
