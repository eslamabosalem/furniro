import FormInput from "@/components/UI/FormInput";
import FormSelectBox from "@/components/UI/FormSelectBox";
import TotalsPay from "./TotalsPay";

async function CheckOutForm() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();

  return (
    <div className="container py-20">
      <form className="flex gap-20 lg:gap-40 justify-center flex-wrap">
        {/* Billing Information */}
        <div className="billing-information max-sm:max-w-[320px] w-[400px]">
          <h3 className="font-bold text-3xl mb-2">Billing details</h3>
          {/* Name */}
          <div className="name-input flex gap-4">
            <FormInput id="firstname flex-1" label="First Name" />
            <FormInput id="lastname flex-1" label="Last Name" />
          </div>
          {/* Company Name */}
          <FormInput id="companyname" label="Company Name (Optional)" />
          {/* SelectBox */}
          <FormSelectBox id="countryregion" label="Country / Region">
            <option value="">Choose...</option>
            {data.map((country: { name: { common: string } }) => {
              const name = country.name.common;
              return (
                <option value={name} key={name}>
                  {name}
                </option>
              );
            })}
          </FormSelectBox>
          <FormInput id="streetaddress" label="Street address" />
          <FormInput id="towncity" label="Town / City" />
          <FormInput id="zipcode" label="ZIP code" />
          <FormInput id="phone" label="Phone" />
          <FormInput id="emailaddress" label="Email address" />
          <FormInput
            id="additionalinformation"
            placeholder="Additional information"
          />
        </div>

        {/* Totals And Pay */}
        <TotalsPay />
      </form>
    </div>
  );
}
export default CheckOutForm;
