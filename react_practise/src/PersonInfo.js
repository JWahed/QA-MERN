const SomeApp = () => {

    const address = {
        forename: "Fake",
        surname: "Name",
        line1: "QA Consulting",
        line2: "1 St Katharines Way",
        city: "London",
        postCode: "E1W 1UN"
    }

    return (
        <div>
            <h1>{address.forename} {address.surname}</h1>
            <h1>{address.line1}</h1>
            <h1>{address.line2}</h1>
            <h1>{address.city}</h1>
            <h1>{address.postCode}</h1>
        </div>
    );
}
export default SomeApp;