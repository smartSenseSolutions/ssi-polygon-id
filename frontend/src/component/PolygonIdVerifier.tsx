import { useState, useEffect, useRef } from "react"
import { io } from "socket.io-client"
import QRCode from "react-qr-code"
import { fetchGovtQRCode, fetchInsuranceQR } from "../lib/api"
import { toast } from "react-toastify"

export const PolygonIDVerifier = ({ onVerificationResult, verificationType }: { onVerificationResult: () => any; verificationType?: string }) => {
    const counter = useRef(0)

    const [sessionId, setSessionId] = useState<any>("")
    const [qrCodeData, setQrCodeData] = useState<any>()
    const [socketEvents, setSocketEvents] = useState<any[]>([])

    const serverUrl = "http://localhost:4007"

    const socket = io(serverUrl)

    useEffect(() => {
        console.log("inside")
        socket.on("connect", () => {
            console.log(socket.id)
            setSessionId(socket.id)
            socket.on(socket.id as string, (arg) => {
                setSocketEvents((socketEvents) => [...socketEvents, arg])
            })
        })
    }, [])

    useEffect(() => {
        if (sessionId) {
            console.log(counter)
            if (counter.current == 0) {
                if (verificationType == "ins") {
                    fetchInsQR()
                } else {
                    fetchGovtQR()
                }
                counter.current = counter.current++
            }
        }
    }, [sessionId])
    const fetchGovtQR = async () => {
        const data = await fetchGovtQRCode(sessionId)
        setQrCodeData(data)
    }

    const fetchInsQR = async () => {
        const data = await fetchInsuranceQR(sessionId)
        setQrCodeData(data)
    }
    useEffect(() => {
        if (socketEvents.length) {
            const currentSocketEvent = socketEvents[socketEvents.length - 1]
            if (currentSocketEvent.fn === "handleVerification") {
                console.log(currentSocketEvent.status)
                if (currentSocketEvent.status === "IN_PROGRESS") {
                    toast("Verification in progress", { type: "success" })
                } else {
                    if (currentSocketEvent.status === "DONE") {
                        setTimeout(() => {
                            reportVerificationResult(true)
                        }, 2000)
                        socket.close()
                    } else {
                        toast("Verification in failed", { type: "error" })
                    }
                }
            }
        }
    }, [socketEvents])

    const reportVerificationResult = (result: any) => {
        console.log(result)
        onVerificationResult()
    }

    return (
        <div>
            {qrCodeData && (
                <div className="flex flex-row items-center content-center justify-center">
                    <div className="rounded-lg overflow-hidden p-5 bg-white w-400 ">
                        <QRCode size={400} value={qrCodeData} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default PolygonIDVerifier
