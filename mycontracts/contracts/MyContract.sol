pragma solidity ^0.8.2;

contract MyContract {
    event AddedAddress(address a);
    address[] public myaddresses;

    constructor() {
        myaddresses = [0xABcABcabCaBCAbcabCabCABCAbcaBCabcaBcaBc0];
    }

    function addAddress(address a) public {
        myaddresses.push(a);
        emit AddedAddress(a);
    }
}
