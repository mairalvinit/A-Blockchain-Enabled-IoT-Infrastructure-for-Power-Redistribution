// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Sample {
    uint data;

    function set(uint d) public{
        data = d;
    }

    function get() public  view returns(uint retVal) {
        return data;
    }
}