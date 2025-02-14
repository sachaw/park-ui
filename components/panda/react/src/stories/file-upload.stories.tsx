import type { Meta } from '@storybook/react'
import { Trash2Icon } from 'lucide-react'
import { Button } from '~/components/ui/button'
import * as FileUpload from '~/components/ui/file-upload'
import { IconButton } from '~/components/ui/icon-button'

const meta: Meta = {
  title: 'Components/File Upload',
}

export default meta

export const Base = () => {
  return (
    <FileUpload.Root maxFiles={3}>
      <FileUpload.Dropzone>
        <FileUpload.Label>Drop your files here</FileUpload.Label>
        <FileUpload.Trigger asChild>
          <Button size="sm">Open Dialog</Button>
        </FileUpload.Trigger>
      </FileUpload.Dropzone>
      <FileUpload.ItemGroup>
        {(files) =>
          files.map((file, id) => (
            <FileUpload.Item key={id} file={file}>
              <FileUpload.ItemPreview type="image/*">
                <FileUpload.ItemPreviewImage />
              </FileUpload.ItemPreview>
              <FileUpload.ItemName />
              <FileUpload.ItemSizeText />
              <FileUpload.ItemDeleteTrigger asChild>
                <IconButton variant="link" size="sm">
                  <Trash2Icon />
                </IconButton>
              </FileUpload.ItemDeleteTrigger>
            </FileUpload.Item>
          ))
        }
      </FileUpload.ItemGroup>
    </FileUpload.Root>
  )
}
