import { Button } from '@hilla/react-components/Button.js';
import { Notification } from '@hilla/react-components/Notification.js';
import { TextField } from '@hilla/react-components/TextField.js';
import { HelloReactEndpoint } from 'Frontend/generated/endpoints.js';
import { useState } from 'react';
import Category from "Frontend/generated/com/lpw/getfed/models/Category.js";

export default function HelloReactView() {
  const [name, setName] = useState('');

  return (
    <>
      <section className="flex p-m gap-m items-end">
        <TextField
          label="Your name"
          onValueChanged={(e) => {
            setName(e.detail.value);
          }}
        />
        <Button
          onClick={async () => {
              const cat: Category = {
                  icon: "MyIcon",
                  label: "breakfast",
                  meals: [
                      {
                          description: "my first meal desc",
                          title: "meal title"
                      }
                  ]
              }
            const data = await HelloReactEndpoint.sayHello();
            console.log(data)
          }}
        >
          Say hello
        </Button>
      </section>
    </>
  );
}
