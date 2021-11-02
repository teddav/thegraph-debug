import { BigInt, log, ethereum, Address } from '@graphprotocol/graph-ts'
import { ContractAddr } from "../generated/schema"
import { AddedAddress, MyContract } from "../generated/MyContract/MyContract"

export function handleEv(event: AddedAddress): void {
    log.debug("TEST LOG", [])
    const contract = MyContract.bind(Address.fromString("0x834787f9728A2797Df987AEEDb6d3D7446E93282"));
    const value = contract.myaddresses(BigInt.fromString("0"));
    log.debug("LOGGING {}", [value.toHexString()])

    const data = new ContractAddr("abc")
    data.addresses = ["0x834787f9728A2797Df987AEEDb6d3D7446E93282"]
    data.save()

    const result = contract.try_myaddresses(BigInt.fromString("50"))
    if (result.reverted) {
        log.debug("REVERTED", [])
    } else {
        log.debug("ALL GOOD {}", [])

        // const data2 = new ContractAddr("def")
        // data2.addresses = [result.value.toHexString()]
        // data2.save()
    }
}
