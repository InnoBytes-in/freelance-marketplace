import Form from "../../components/Client/Form";
import { FormProvider } from "../../contexts/FormContext";

const PostProjectPage = () => {

  return (
    <div className="bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 p-4">
      <FormProvider>
        <Form/>
      </FormProvider>
    </div>
  )

}

export default PostProjectPage;