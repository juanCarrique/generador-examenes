import { useExcel } from "../hooks/useExcel";
import Button from '@mui/joy/Button';
import SvgIcon from '@mui/joy/SvgIcon';
import { styled } from '@mui/joy';
import { useEffect } from "react";

const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

function InputFileUpload({ handleFileChange }) {
  return (
    <Button 
      component="label"
      role={undefined}
      tabIndex={-1}
      variant="outlined"
      color="neutral"
      startDecorator={
        <SvgIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>
        </SvgIcon>
      }
    >
      Subir archivo
      <VisuallyHiddenInput type="file" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" onChange={handleFileChange} />
    </Button>
  );
}

const ExcelUploader = () => {
   
    const {excel, handleFileChange} = useExcel()
    useEffect(() => {}, [excel])

    return (
        <div className="cargaArchivo">
            <div className="excelTxt" >
                <h2>Subir archivo Excel:</h2>
                <p className="aviso">🚨<strong>Formato requerido del Excel: Preguntas en Columna A, Respuestas en Columnas Subsiguientes (B, C, D,...).</strong>🚨</p>
            </div>
            {<InputFileUpload handleFileChange={handleFileChange}/>}
            {excel !== null && 
            <div className="excelFileText">
              <p>{excel.name}</p>
            </div>
            }

        </div>
    )
}

export default ExcelUploader;