"use client"

import { Button } from "@repo/ui/Button";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/Center";
import { TextInput } from "@repo/ui/TextInput";
import { useState } from "react";

export function SendCard() {
    const [number , setNumber] = useState("");
    const [amount, setAmount] = useState("");

    return <div className="h-[90vh] ">
        <Center>
            <Card title="Send Money" >
                <div className="min-w-72 pt-2">
                    <TextInput id="send-phone-number" placeholder="Phone Number" label="Enter Phone Number" onChange={value => {setNumber(value)}} />
                    <TextInput id="send-amount" placeholder="Amount" label="Enter Amount" onChange={value =>{ setAmount(value)}} />
                        <div className="pt-4 flex justify-center">
                            <Button onClick={() => {

                            }}>Send</Button>
                        </div>
                </div>
            </Card>
        </Center>
    </div>
}