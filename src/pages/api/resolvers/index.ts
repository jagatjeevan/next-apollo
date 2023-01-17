import axios from "axios";

export const resolvers = {
  Query: {
    getUsers: async () => {
      try {
        const users = await axios.get("https://api.github.com/users");
        return users.data.map(({ id, login, avatar_url }) => ({
          id,
          login,
          avatar_url,
        }));
      } catch (error) {
        throw error;
      }
    },

    getUser: async (_: any, args: { name: any }) => {
      try {
        const user = await axios.get(
          `https://api.github.com/users/${args.name}`
        );
        return {
          id: user.data.id,
          login: user.data.login,
          avatar_url: user.data.avatar_url,
        };
      } catch (error) {
        throw error;
      }
    },

    getCountry: () => {
      return [
        {
          __typename: "Country",
          code: "AD",
          name: "Andorra",
          emoji: "🇦🇩",
        },
        {
          __typename: "Country",
          code: "AE",
          name: "United Arab Emirates",
          emoji: "🇦🇪",
        },
        {
          __typename: "Country",
          code: "AF",
          name: "Afghanistan",
          emoji: "🇦🇫",
        },
        {
          __typename: "Country",
          code: "AG",
          name: "Antigua and Barbuda",
          emoji: "🇦🇬",
        },
        {
          __typename: "Country",
          code: "AI",
          name: "Anguilla",
          emoji: "🇦🇮",
        },
        {
          __typename: "Country",
          code: "AL",
          name: "Albania",
          emoji: "🇦🇱",
        },
        {
          __typename: "Country",
          code: "AM",
          name: "Armenia",
          emoji: "🇦🇲",
        },
        {
          __typename: "Country",
          code: "AO",
          name: "Angola",
          emoji: "🇦🇴",
        },
        {
          __typename: "Country",
          code: "AQ",
          name: "Antarctica",
          emoji: "🇦🇶",
        },
        {
          __typename: "Country",
          code: "AR",
          name: "Argentina",
          emoji: "🇦🇷",
        },
      ];
    },
  },
};
