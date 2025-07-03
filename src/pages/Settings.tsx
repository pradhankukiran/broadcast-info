import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Settings = () => {
  return (
    <div className="relative min-h-screen w-full bg-background">
      <div className="absolute inset-0 w-full h-full bg-[length:200%_200%] bg-belgium-gradient-full animate-background-pan" />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <div className="relative z-10 flex flex-col items-center min-h-screen py-8">
        <h1 className="text-5xl font-bold mb-12">Settings</h1>
        <div className="w-full max-w-4xl px-4 space-y-8">
          <Card className="bg-transparent border-secondary shadow-lg backdrop-blur-lg">
            <CardHeader>
              <CardTitle>API Keys</CardTitle>
              <CardDescription>
                Enter your API keys for the services you want to use.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="openai-api-key">OpenAI API Key</Label>
                <Input
                  id="openai-api-key"
                  placeholder="Enter your OpenAI API key"
                  type="password"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="elevenlabs-api-key">Eleven Labs API Key</Label>
                <Input
                  id="elevenlabs-api-key"
                  placeholder="Enter your Eleven Labs API key"
                  type="password"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sendgrid-api-key">SendGrid API Key</Label>
                <Input
                  id="sendgrid-api-key"
                  placeholder="Enter your SendGrid API key"
                  type="password"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-transparent border-secondary shadow-lg backdrop-blur-lg">
            <CardHeader>
              <CardTitle>MP3 Upload</CardTitle>
              <CardDescription>
                Upload your audio files for the broadcast.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="intro-file">Intro</Label>
                <Input id="intro-file" type="file" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="background-file">Background</Label>
                <Input id="background-file" type="file" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="outro-file">Outro</Label>
                <Input id="outro-file" type="file" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-transparent border-secondary shadow-lg backdrop-blur-lg">
            <CardHeader>
              <CardTitle>Prompts</CardTitle>
              <CardDescription>
                Configure the prompts for generating the broadcast content.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="system-prompt">System Prompt</Label>
                <Textarea
                  id="system-prompt"
                  placeholder="Enter the system prompt"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="user-prompt">User Prompt</Label>
                <Textarea
                  id="user-prompt"
                  placeholder="Enter the user prompt"
                />
              </div>
            </CardContent>
          </Card>
          <div className="flex justify-end">
            <Button>Save Settings</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings; 