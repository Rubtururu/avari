let abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "rawAmount",
				"type": "uint256"
			}
		],
		"name": "UserLobby",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "rawAmount",
				"type": "uint256"
			}
		],
		"name": "UserLobbyCollect",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "rawAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "duration",
				"type": "uint256"
			}
		],
		"name": "UserStake",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "rawAmount",
				"type": "uint256"
			}
		],
		"name": "UserStakeCollect",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "stakeId",
				"type": "uint256"
			}
		],
		"name": "stake_lend",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "stakeId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "stake_loan",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "stakeId",
				"type": "uint256"
			}
		],
		"name": "stake_loan_request",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "stakeId",
				"type": "uint256"
			}
		],
		"name": "stake_sell_request",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "stakeId",
				"type": "uint256"
			}
		],
		"name": "EndStake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "referrerAddr",
				"type": "address"
			}
		],
		"name": "EnterLobby",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "stakingDays",
				"type": "uint256"
			}
		],
		"name": "EnterStake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "targetDay",
				"type": "uint256"
			}
		],
		"name": "ExitLobby",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_clcDay",
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
		"name": "_clcDay_tobeset",
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
				"internalType": "address",
				"name": "_address",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_Day",
				"type": "uint256"
			}
		],
		"name": "_clcTokenValue",
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
		"name": "_updateDaily",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
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
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
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
				"internalType": "address",
				"name": "sellerAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "stakeId",
				"type": "uint256"
			}
		],
		"name": "buyStakeRequest",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "StakeDuration",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "StakeAmount",
				"type": "uint256"
			}
		],
		"name": "calcBonusToken",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_stakeId",
				"type": "uint256"
			}
		],
		"name": "calcStakeCollecting",
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
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "calcStakeCount",
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
				"name": "stakeId",
				"type": "uint256"
			}
		],
		"name": "cancelStakeLoanRequest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "clcLenderStakeId",
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
				"name": "stakeId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "lenderStakeId",
				"type": "uint256"
			}
		],
		"name": "collectLendReturn",
		"outputs": [],
		"stateMutability": "nonpayable",
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
		"name": "dayBNBPool",
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
		"name": "daysActiveInStakeTokens",
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
		"name": "daysActiveInStakeTokensDecrase",
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
		"name": "daysActiveInStakeTokensIncrese",
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
				"name": "__Day",
				"type": "uint256"
			}
		],
		"name": "debug_setCurrentDay",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "devShareOfStakeSellsAndLoanFee",
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
				"internalType": "address",
				"name": "adr",
				"type": "address"
			}
		],
		"name": "do_changeMarketingAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
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
		"name": "enterytokenMath",
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
		"name": "firstDayFlushed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "flushFirstDayLobbyEntry",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "flushFirstDayLobbyEntrySwitch",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "flushdevShareOfStakeSells",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "stakeId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "loanAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "returnAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "loanDuration",
				"type": "uint256"
			}
		],
		"name": "getLoanOnStake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "loanerAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "stakeId",
				"type": "uint256"
			}
		],
		"name": "lendOnStake",
		"outputs": [],
		"stateMutability": "payable",
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
		"name": "lendersPaidAmount",
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
		"name": "loaningIsPaused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
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
		"name": "lobbyEntry",
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
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "mapLenderInfo",
		"outputs": [
			{
				"internalType": "address",
				"name": "lenderAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "loanerAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "stakeId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "loanAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "returnAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endDay",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "loanIsPaid",
				"type": "bool"
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
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "mapMemberLobby",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "memberLobbyValue",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "memberLobbyEntryDay",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "hasCollected",
				"type": "bool"
			},
			{
				"internalType": "address",
				"name": "referrer",
				"type": "address"
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
		"name": "mapMemberLobby_overallData",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "overall_collectedTokens",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "overall_lobbyEnteries",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "overall_stakedTokens",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "overall_collectedDivs",
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
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "mapMemberStake",
		"outputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenValue",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "startDay",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endDay",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "stakeId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "loansReturnAmount",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "stakeCollected",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "stake_hasSold",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "stake_forSell",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "stake_hasLoan",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "stake_forLoan",
				"type": "bool"
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
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "mapRequestingLoans",
		"outputs": [
			{
				"internalType": "address",
				"name": "loanerAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "lenderAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "stakeId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "loanAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "returnAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "duration",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "lend_startDay",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "lend_endDay",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "hasLoan",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "loanIsPaid",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "overall_collectedBonusTokens",
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
		"name": "overall_collectedDivs",
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
		"name": "overall_collectedTokens",
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
		"name": "overall_lobbyEntry",
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
		"name": "overall_stakedTokens",
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
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
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
		"name": "referrerBonusesPaid",
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
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "saveTotalToken",
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
				"name": "stakeId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "sellStakeRequest",
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
		"name": "soldStakeFunds",
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
		"name": "stakeSelingIsPaused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "switchLoaningStatus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "switchStakeSellingStatus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
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
		"name": "totalStakeTradeAmount",
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
		"name": "totalStakesSold",
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
		"name": "totalSupply",
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
		"name": "totalTokensInActiveStake",
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
		"name": "totalTradeAmount",
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
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "usersCount",
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
		"name": "usersCountDaily",
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
		"name": "withdrawSoldStakeFunds",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

////////////////////////////////////////////////////////////////////////////////////////////////
const DESI = 100000000
const SUN = 1000000
const zeroAddress = "0x000000000000000000000000000000000000dEaD"
let mainContract, currentDay
let contractAddress = "0xE3B00d52C86750524295F06Acd8F844623A3A954"

let user = {
    address: void 0,
    balance: void 0,
    balance_bnb: void 0,
    referrer: zeroAddress
}

let rTargetTime;

function setUpContracts() {
    mainContract = new web3.eth.Contract(abi, contractAddress)
    if (!mainContract) return void 0

    contractLoaded()
    console.log("Contract Loaded")
}

window.addEventListener('load', async () => {
    web3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed1.binance.org:443"));
    web3.eth.setProvider(Web3.givenProvider);
    let accs = await window.ethereum.request({ method: 'eth_requestAccounts' });
    user.address = accs[0]
    setUpContracts()
    setUpAccount()
    console.log("conn", accs[0])

    try {
        // ask user for permission
        await ethereum.enable();
        // user approved permission
    } catch (error) {
        // user rejected permission
        console.log('user rejected permission');
    }
})

function setUpAccount() {
    updateHeadAddress()

    if ($('.ref-link')[0]) $('.ref-link')[0].value = "https://avaricetoken.io/?ref=" + user.address

    if (typeof userAccConnected == "function") userAccConnected()
}

function updateHeadAddress() {
    let p2 = user.address.slice(42 - 5)
    // $('.my-acc-add')[1].innerHTML = user.address.slice(0, 5) + "..." + p2
    $('.c-square-span')[0].innerHTML = user.address.slice(0, 5) + "..." + p2
}

function contractLoaded() {
    if (!user.address) return

    getUserBalance()
    setInterval(() => {
        getUserBalance()
    }, 1000 * 6)

    getCurrentDay()

    let intso = setInterval(() => {
        if (currentDay) {
            clearInterval(intso)

            if (typeof refreshGlobalData === "function") refreshGlobalData()
            if (typeof run_Stake === "function") run_Stake()
            if (typeof run_Auction === "function") run_Auction()
            if (typeof run_Dividends === "function") run_Dividends()
        }
    }, 100)
}

function getLobbyData() {
    mainContract.methods.lobbyEntry().call({
        shouldPollResponse: true
    }).then(res => {
        console.log(res)
    })
}

function getCurrentDay() {
    mainContract.methods._clcDay().call({
        shouldPollResponse: true
    }).then(res => {
        if (currentDay !== parseInt(res) && typeof auctionRender === "function") auctionRender(parseInt(res))

        currentDay = parseInt(res)
    })

    setTimeout(() => {
        getCurrentDay()
    }, 1000 * 60 * 5)
}

// get balance of user and set it on the header
function getUserBalance() {
    mainContract.methods.balanceOf(user.address).call({
        shouldPollResponse: false
    }).then(res => {
        user.balance = parseInt(res);

        async function f() {
            let bnb_balance = await web3.eth.getBalance(user.address);
            user.balance_bnb = parseInt(bnb_balance);

            setUserData();
        }
        f();
    })
}

function setUserData() {
    $('.user-data-2')[0].value = parseFloat((user.balance / 1e18).toFixed(1));
    $('.user-data-1')[0].value = parseFloat((user.balance_bnb / 1e18).toFixed(4));
}

// Obtener la fecha Unix de inicio y la duración del contador
const startTime = 1716791367; // Fecha Unix de inicio
const duration = 24 * 60 * 60 * 1000; // Duración de 24 horas en milisegundos

// Calcular el tiempo objetivo sumando la fecha de inicio y la duración
rTargetTime = startTime * 1000 + duration;

// Obtener el tiempo actual del servidor NTP
async function getCurrentTimeFromNTP() {
    try {
        const response = await fetch("https://worldtimeapi.org/api/ip");
        const data = await response.json();
        return new Date(data.unixtime * 1000); // Convertir el tiempo UNIX a milisegundos
    } catch (error) {
        console.error("Error al obtener la hora del servidor NTP:", error);
        return null;
    }
}

// Actualizar el tiempo restante cada segundo
setInterval(async () => {
    updateTimerDisplay(await getCurrentTimeFromNTP());
}, 1000);

async function updateTimerDisplay(currentTime) {
    if (!currentTime) return;

    const now = currentTime.getTime();
    const t = rTargetTime - now;

    if (t < 0) {
        // Si la cuenta regresiva ha terminado, muestra 00:00:00
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $('.day-end-in-mb')[0].innerHTML = `00 : 00 : 00`;
        } else {
            $('.day-end-in')[0].innerHTML = `Day Ends In: 00 : 00 : 00`;
        }
        return;
    }

    const hours = String(Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    const minutes = String(Math.floor((t % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const seconds = String(Math.floor((t % (1000 * 60)) / 1000)).padStart(2, '0');

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('.day-end-in-mb')[0].innerHTML = `${hours} : ${minutes} : ${seconds}`;
    } else {
        $('.day-end-in')[0].innerHTML = `Day Ends In: ${hours} : ${minutes} : ${seconds}`;
    }
}




let moralisRecentEvents
function getMoralisData_server() {
	$.getJSON('../get-moralis-data', function(data) {
		moralisRecentEvents = data
		renderMoralisData(moralisRecentEvents, true)
	});
}
setInterval(() => {
	getMoralisData_server()
}, 1000 * 10)
getMoralisData_server()





// /* Moralis init code */
// const serverUrl = "https://c9w7lgwmwwtb.usemoralis.com:2053/server";
// const appId = "76DpEVsMmMkmhGRcVgSd0Bdy8DWvBSQmex0WtAa8";
// Moralis.start({serverUrl, appId});

// let aaaa
// async function getMoralisData() {
//     const data = await Moralis.Cloud.run("getEvents")
// 	console.log(data)
// 	renderMoralisData(data)
// }



// setInterval(() => {
// 	getMoralisData()
// }, 1000 * 10)
// getMoralisData()



// function getRecentEvents() {
// 	$.getJSON('../get_sell_requests', function(data) {
// 		data.sort(function(b, a) {
// 			return parseInt(a.rawData.timestamp) - parseInt(b.rawData.timestamp);
// 		});
// 		doRecentEvengts(data)
// 		console.log(data)
// 	});
// }


function renderMoralisData(data, noattribute) {
	let counter = 0
	$('.recent-events')[0].innerHTML = ""
	// let lastTx
	// data.forEach(itm => {
	// if (lastTx === itm.ele.tx) {
	// 	lastTx = itm.tx
	// 	return
	// }
	
	// lastTx = itm.tx


	if (noattribute) {
		let txt
		if (data[0]) {
			data[0].forEach(el => {
				txt = `Stake Started: ${(parseInt(el.rawAmount)).toFixed(2) / 1e18} AVC for ${el.duration} days`
				dores(el)
			})
		}
	
		if (data[1]) {
			data[1].forEach(el => {
				txt = `Stake Collected: ${(parseInt(el.rawAmount) / 1e18).toFixed(5)} BNB`
				dores(el)
			})
		}
	
		if (data[2]) {
			data[2].forEach(el => {
				txt = `Auction Entered:<br> ${parseInt(el.rawAmount) / 1e18} BNB`
				dores(el)
			})
		}
	
		// if (data[3]) {
		// 	data[3].forEach(el => {
		// 		txt = `Auction Collected: ${parseInt(el.rawAmount) / 1e18} AVC`
		// 		dores(el)
		// 	})
		// }
	
		if (data[3]) { 
			data[3].forEach(el => {
				counter++
				if (counter < 15) {
					txt = `${parseInt(el.rawAmount) / 1e18} AVC Stake sell request for ${parseInt(el.price) / 1e18} BNB`
					dores(el)
				}
			})
		}
	
		if (data[4]) {
			data[4].forEach(el => {
				txt = `${parseInt(el.rawAmount) / 1e18} BNB Loan request for ${parseInt(el.duration)} Days`
				dores(el)
			})
		}
	
			
		function dores(el) {
			let p22 = el.addr.slice(42 - 5)
	
			$('.recent-events')[0].innerHTML += 
				`<div id="${parseInt(el.timestamp)}" onclick="window.open('https://bscscan.com/tx/${el.transaction_hash}')" 
				style="background-color: #2e8b90;
				cursor: pointer;
				margin: 6px;
				border-radius: 3px;
				height: auto;
				color: #ffffffb8;
				text-align: center;
				margin: 8px;
				
			"><div style="
			background-color: #267579;
			border-radius: 3px;
			height: 20px;
			color: #ffffff4f;
			text-align: center;
			font-weight: 900;
			font-family: 'Montserrat-m1'
			">${el.addr.slice(0, 5) + "..." + p22}</div><div style="
			border-radius: 3px;
			height: 20px;
			color: #ffffffb8;
			text-align: center;
			display: contents;
			font-size: inherit;
			font-weight: 400;
			font-family: 'Montserrat-m1';
			">${txt}</div><div style="
			font-size: 12px;
		border-radius: 3px;
		color: #ffffff52;
		text-align: right;
		margin-right: 3px;
		/* font-weight: 900; */
		font-family: 'Montserrat-m1';
			">${timeSince(parseInt(el.timestamp) * 1000)} ago</div></div>`
		}
	 }
	// else{
	// 	let txt
	// 	if (data[0]) {
	// 		data[0].forEach(el => {
	// 			txt = `Stake Started: ${parseInt(el.attributes.rawAmount) / 1e18} AVC for ${el.attributes.duration} days`
	// 			dores(el)
	// 		})
	// 	}
	
	// 	if (data[1]) {
	// 		data[1].forEach(el => {
	// 			txt = `Stake Collected: ${(parseInt(el.attributes.rawAmount) / 1e18).toFixed(5)} BNB`
	// 			dores(el)
	// 		})
	// 	}
	
	// 	if (data[2]) {
	// 		data[2].forEach(el => {
	// 			txt = `Auction Entered:<br> ${parseInt(el.attributes.rawAmount) / 1e18} BNB`
	// 			dores(el)
	// 		})
	// 	}
	
	// 	// if (data[3]) {
	// 	// 	data[3].forEach(el => {
	// 	// 		txt = `Auction Collected: ${parseInt(el.attributes.rawAmount) / 1e18} AVC`
	// 	// 		dores(el)
	// 	// 	})
	// 	// }
	
	// 	if (data[3]) {
	// 		data[3].forEach(el => {
	// 			counter++
	// 			if (counter < 15) {
	// 				txt = `${parseInt(el.attributes.rawAmount) / 1e18} AVC Stake sell request for ${parseInt(el.attributes.price) / 1e18} BNB`
	// 				dores(el)
	// 			}
	// 		})
	// 	}
	
	// 	if (data[4]) {
	// 		data[4].forEach(el => {
	// 			txt = `${parseInt(el.attributes.rawAmount) / 1e18} BNB Loan request for ${parseInt(el.attributes.duration)} Days`
	// 			dores(el)
	// 		})
	// 	}
	
			
	// 	function dores(el) {
	// 		let p22 = el.attributes.addr.slice(42 - 5)
	
	// 		$('.recent-events')[0].innerHTML += 
	// 			`<div id="${parseInt(el.attributes.timestamp)}" onclick="window.open('https://bscscan.com/tx/${el.attributes.transaction_hash}')" 
	// 			style="background-color: #2e8b90;
	// 			cursor: pointer;
	// 			margin: 6px;
	// 			border-radius: 3px;
	// 			height: auto;
	// 			color: #ffffffb8;
	// 			text-align: center;
	// 			margin: 8px;
				
	// 		"><div style="
	// 		background-color: #267579;
	// 		border-radius: 3px;
	// 		height: 20px;
	// 		color: #ffffff4f;
	// 		text-align: center;
	// 		font-weight: 900;
	// 		font-family: 'Montserrat-m1'
	// 		">${el.attributes.addr.slice(0, 5) + "..." + p22}</div><div style="
	// 		border-radius: 3px;
	// 		height: 20px;
	// 		color: #ffffffb8;
	// 		text-align: center;
	// 		display: contents;
	// 		font-size: inherit;
	// 		font-weight: 400;
	// 		font-family: 'Montserrat-m1';
	// 		">${txt}</div><div style="
	// 		font-size: 12px;
	// 	border-radius: 3px;
	// 	color: #ffffff52;
	// 	text-align: right;
	// 	margin-right: 3px;
	// 	/* font-weight: 900; */
	// 	font-family: 'Montserrat-m1';
	// 		">${timeSince(parseInt(el.attributes.timestamp) * 1000)} ago</div></div>`
	// 	}
	// }


	var aT = []
	for (var i = 0 ; i <= $('.recent-events')[0].children.length ; i++) {
		aT.push($('.recent-events')[0].children[i])
	}

	aT.sort(function(b, a) {
		return parseInt(a.id) - parseInt(b.id);
	});

	$('.recent-events')[0].innerHTML = ""

	for (var i = 0 ; i <= aT.length ; i++) { 
		if (aT[i]) $('.recent-events')[0].appendChild(aT[i]) 
	}
}






function timeSince(date) {
	var seconds = Math.floor((new Date() - date) / 1000);
	var interval = seconds / 31536000;
  
	if (interval > 1) {
	  return Math.floor(interval) + " year/s";
	}
	interval = seconds / 2592000;
	if (interval > 1) {
	  return Math.floor(interval) + " month/s";
	}
	interval = seconds / 86400;
	if (interval > 1) {
	  return Math.floor(interval) + " day/s";
	}
	interval = seconds / 3600;
	if (interval > 1) {
	  return Math.floor(interval) + " hour/s";
	}
	interval = seconds / 60;
	if (interval > 1) {
	  return Math.floor(interval) + " minute/s";
	}
	return Math.floor(seconds) + " second/s";
}






function openModal3() {

    $('.modal3')[0].style.marginTop = "auto"
    $('.modal3')[0].style.marginLeft = "auto"

    $('.modal3')[0].style.visibility = "visible"
    $('.modal3')[0].style.opacity = "1"
}

function closeModal3() {
    $('.modal3')[0].style.marginTop = "-10000px"
    $('.modal3')[0].style.marginLeft = "-10000px"

    $('.modal3')[0].style.visibility = "invisible"
    $('.modal3')[0].style.opacity = "0"
}

function TransferAVCTokens() {
	let toAddress = $('.inp-tra-2')[0].value
    let amount = $('.inp-tra-1')[0].value
	amount = web3.utils.toWei(amount,'ether');

    if (!amount || !mainContract) return

	

    mainContract.methods.transfer(toAddress, amount).send({
        from: user.address,
        shouldPollResponse: false
    }).then(res => {
		doAlert(`Successfully Sent.`, 3)
		closeModal3()
    }).catch(err => {
        doAlert("Something went wrong!", 2)
    }).finally(res => {
		closeModal3()
    })
}





function copyreflink() {
	
	var linkk = `https://avaricetoken.io/?r=${user.address}`;
	navigator.clipboard.writeText(linkk).then(function() {
	  console.log('Async: Copying to clipboard was successful!');
	}, function(err) {
	  console.error('Async: Could not copy text: ', err);
	});
}

function lobbyPoolclc2(day) {
    let starter = 3e6 //- (3e6 * 0.5 / 100)
    let toreturn

    for (var i = 0 ; i < day; i++) {
        let beshown = starter
        starter -= starter *5/1000
        toreturn = beshown.toFixed(0)
    }

    return toreturn
}

let dayEnteries = []

function getDayEntery2(_day) {
    mainContract.methods.lobbyEntry(_day).call({
        shouldPollResponse: true
    }).then(res => {
		dayEnteries[_day] = parseInt(res) / 1e18
    })
}

function averagePriceCalc() {
	dayEnteries = []
	//let duration = 3
	for(var i = 0 ; i < 3 ; i++) {
		getDayEntery2(currentDay - (i+1))
	}

	whenStartClcAvg()
}

function whenStartClcAvg() {
	setTimeout(() => {
		if (dayEnteries.length == currentDay) {
			clcPrice()
		}else{
			whenStartClcAvg()
		}
	}, 500)
}

let avgPrice

function clcPrice() {
	//let duration = 3
	let fn

	avgPrice =
	dayEnteries[currentDay - 1] / lobbyPoolclc2((currentDay - 1) + 1) +
	dayEnteries[currentDay - 2] / lobbyPoolclc2((currentDay - 2) + 1) +
	dayEnteries[currentDay - 3] / lobbyPoolclc2((currentDay - 3) + 1)	

	avgPrice /= 3
}

