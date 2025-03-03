// define your extension array
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import { EditorContent, useEditor } from "@tiptap/react";
import { useImperativeHandle } from "react";

type TextEditorRefType = {
  refreshContent: () => string;
};

type TextEditorProps = {
  richText: string;
  ref: React.Ref<TextEditorRefType>;
};

const TextEditor = ({ richText, ref }: TextEditorProps) => {
  const editor = useEditor({
    extensions: [Document, Paragraph, Text],
    content: richText,
  });

  useImperativeHandle(ref, () => ({
    refreshContent: () => (editor ? editor.getHTML() : richText),
  }));

  return (
    <div className="no-scrollbar max-h-28 min-h-16 overflow-y-scroll rounded-2xl border border-gray-200 p-2 text-base focus-within:ring-2 focus-within:ring-neutral-900">
      <EditorContent editor={editor} />
    </div>
  );
};

export { TextEditor, type TextEditorRefType };
