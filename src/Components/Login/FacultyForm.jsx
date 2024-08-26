import ArrayFacultyForm from "./StudentArrayField/ArrayFacultyForm";
import InputField from "../FormFilled/InputField";
import SelectBox from "../FormFilled/SelectBox";
import ChooseFile from "../FormFilled/ChooseFile";
import Textarea from "../FormFilled/Textarea";
import MutlipleField from "../FormFilled/MutlipleField";

const FacultyForm = () => {
  return (
    <form>
      {ArrayFacultyForm.map((section, sectionIndex) => {
        return (
          <div className="flex flex-wrap" key={sectionIndex}>
            {section.fields.map((field, fieldIndex) => {
              return (
                <>
                  {field.type === "heading" ? (
                    <div className={field.divclassName} key={fieldIndex}>
                      <h2 className={field.className}>{field.heading}</h2>
                    </div>
                  ) : field.type === "input" ? (
                    <div className={field.divclassName} key={fieldIndex}>
                      <InputField
                        name={field.name}
                        placeholder={field.placeholder}
                        fieldClassName={field.fieldClassName}
                        inputType={field.inputType}
                        labelClassName={field.labelClassName}
                        pattern={field.pattern}
                      />
                    </div>
                  ) : field.type === "select" ? (
                    <div className={field.divclassName} key={fieldIndex}>
                      <SelectBox
                        name={field.name}
                        placeholder={field.placeholder}
                        options={field.options}
                        fieldClassName={field.fieldClassName}
                      />
                    </div>
                  ) : field.type === "file" ? (
                    <div className={field.divclassName} key={fieldIndex}>
                      <ChooseFile
                        name={field.name}
                        profileImage={field.profileImage}
                        type={field.type}
                        fieldClassName={field.fieldClassName}
                        buttonClassName={field.buttonClassName}
                      />
                    </div>
                  ) : field.type === "textarea" ? (
                    <div className={field.divclassName} key={fieldIndex}>
                      <Textarea allfield={field} />
                    </div>
                  ) : field.type === "multiple" ? (
                    <div className={field.divclassName} key={fieldIndex}>
                      <MutlipleField Allfields={field.multipleFields} />
                    </div>
                  ) : (
                    <h1>Nathing</h1>
                  )}
                </>
              );
            })}
          </div>
        );
      })}
    </form>
  );
};

export default FacultyForm;
