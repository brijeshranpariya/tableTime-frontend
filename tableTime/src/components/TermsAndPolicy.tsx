
export const TermsAndPolicy = () => {
    return (
        <div className="h-full text-center">
            <h1 className="text-3xl font-semibold my-3 text-primary">Terms of Service</h1>
            <hr />
            <div className="text-start mx-2 my-2">
                <p className="font-medium">By using our website to book tables or pre-order food, you agree to the following terms and conditions:</p>
                <div className="my-2">
                    <h1 className="text-xl font-semibold text-secondary">Account & Registration</h1>
                    <hr className="my-2" />
                    <ul className="list-disc pl-6">
                        <li>Users must provide accurate personal details (name, phone, email) for registration and booking.</li>
                        <li>You are responsible for maintaining confidentiality of your account credentials.</li>
                        <li>We reserve the right to suspend or terminate accounts for misuse or fraud.</li>
                    </ul>
                </div>
                <div className="my-2">
                    <h1 className="text-xl font-semibold text-secondary">Table Booking</h1>
                    <hr className="my-2" />
                    <ul className="list-disc pl-6">
                        <li>Table reservations are confirmed only after receiving a confirmation email/SMS.</li>
                        <li>We reserve the right to cancel or reschedule bookings in case of unforeseen circumstances (e.g., restaurant closure).</li>
                        <li>Users must arrive within 15-20 minutes of the reserved time; otherwise, the reservation may be released.</li>
                    </ul>
                </div>
                <div className="my-2">
                    <h1 className="text-xl font-semibold text-secondary">Food Pre-Orders</h1>
                    <hr className="my-2" />
                    <ul className="list-disc pl-6">
                        <li>Pre-orders must be placed at least 10 minutes before the scheduled dining time.</li>
                        <li>Menu items are subject to availability; we may cancel unavailable items with prior notice.</li>
                        <li>Pre-orders cannot be modified or canceled beyond the cutoff time stated in our Cancellation Policy.</li>
                    </ul>
                </div>
                <div className="my-2">
                    <h1 className="text-xl font-semibold text-secondary">Payments</h1>
                    <hr className="my-2" />
                    <ul className="list-disc pl-6">
                        <li>All payments are processed securely through <b>Razorpay</b>.</li>
                        <li>You agree to provide valid payment details and authorize charges for bookings and pre-orders.</li>
                        <li>Taxes, service charges, and additional fees (if any) will be displayed before checkout.</li>
                    </ul>
                </div>
                <div className="my-2">
                    <h1 className="text-xl font-semibold text-secondary">Cancellation & Refunds</h1>
                    <hr className="my-2" />
                    <ul className="list-disc pl-6">
                        <li>Cancellations and refunds are governed by our Cancellation & Refund Policy.</li>
                        <li>Refunds, if applicable, will be processed to the original payment method via Razorpay within a week</li>
                        <li>No refunds will be given for “No-Show” bookings or late cancellations.</li>
                    </ul>
                </div>
                <div className="my-2">
                    <h1 className="text-xl font-semibold text-secondary">User Responsibilities</h1>
                    <hr className="my-2" />
                    <ul className="list-disc pl-6">
                        <li>Ensure accuracy of booking details (date, time, number of guests).</li>
                        <li>Abide by restaurant rules and conduct responsibly during dining.</li>
                        <li>Do not misuse the platform for fraudulent reservations or payments.</li>
                    </ul>
                </div>
                <div className="my-2">
                    <h1 className="text-xl font-semibold text-secondary">Liability Disclaimer</h1>
                    <hr className="my-2" />
                    <ul className="list-disc pl-6">
                        <li>We act as a booking and pre-order platform and are not liable for food quality, delays, or restaurant service issues.</li>
                        <li>We are not responsible for any technical issues, transaction failures, or delays caused by payment gateways/banks.</li>
                        <li>To the maximum extent permitted by law, our liability is limited to the amount paid by the user for the specific booking/order.</li>
                    </ul>
                </div>
                <div className="my-2">
                    <h1 className="text-xl font-semibold text-secondary">Governing Law & Dispute Resolution</h1>
                    <hr className="my-2" />
                    <ul className="list-disc pl-6">
                        <li>These Terms shall be governed by the laws of Gujrat, India.</li>
                        <li>In case of disputes, parties shall first attempt amicable resolution; failing which, disputes will be subject to jurisdiction of courts.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
