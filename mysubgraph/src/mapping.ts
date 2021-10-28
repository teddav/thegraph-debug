import { BigInt, log, ethereum, Address } from '@graphprotocol/graph-ts'
import { ContractAddresses } from "../generated/schema"
import { AddedAddress, MyContract } from "../generated/MyContract/MyContract"

export function handleEv(event: AddedAddress): void {
    log.debug("TEST LOG", [])
    const contract = MyContract.bind(Address.fromString("0x834787f9728A2797Df987AEEDb6d3D7446E93282"));
    const value = contract.myaddresses(BigInt.fromString("0"));
    log.debug("LOGGING {}", [value.toHexString()])

    const data = new ContractAddresses("abc")
    data.addresses = ["0x834787f9728A2797Df987AEEDb6d3D7446E93282"]
    data.save()

    // contract.try_myaddresses(BigInt.fromString("0"))
}
